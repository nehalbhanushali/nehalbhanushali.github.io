var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'src/bundles');
var APP_DIR = path.resolve(__dirname, 'src/');

module.exports = {

  entry: [
   'react-hot-loader/patch',
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',

    index:APP_DIR+'index',
    home: APP_DIR+'home'

  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
   plugins: [
    // Allows for sync with browser while developing (like BorwserSync)
    new webpack.HotModuleReplacementPlugin(),

    ]),
  ],
   devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    // Required for webpack-dev-server.
    outputPath: BUILD_DIR,
  },
  devtool: 'eval',

  module: {
    loaders: [ {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/,
        include : APP_DIR
      }]
  }
};