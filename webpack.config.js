var webpack = require('webpack');
var path = require('path');


const ROOT_PATH = path.resolve(__dirname);

// Three keys on config object that each contain object
// entry -> where it will enter the application
// output -> where the build file will go
// config
var config = {
  entry: [
    // it will look for the index.js file within the src directory
    path.join(ROOT_PATH, 'src'),
  ],
  output: {
    path: path.join(ROOT_PATH, 'lib'),
    filename: 'bundle.js',
  },
  module: {
    // transformation part
    // takes all the files queued, pass through the loaders
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  },
}



// when we are done, we want to expost the config
// object to webpack

module.exports = config
