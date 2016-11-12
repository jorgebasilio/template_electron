var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: "./app/main.js",
  output: {
    path: './dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

process.env.BABEL_ENV = TARGET;
