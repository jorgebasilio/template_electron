var webpack = require('webpack');
const path = require('path')
var poststylus = require('poststylus');

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: "./app/src/main.js",
  output: {
    path: './dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[path]!stylus?sourceMap'
      },
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: [
      '~nib/lib/nib/index.styl',
      path.join(__dirname, 'app/styles/main.styl')
    ]
  },
};

process.env.BABEL_ENV = TARGET;
