var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'src/bundles');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  devtool: 'eval',
  entry: {
     index: APP_DIR + '/index',
    home: APP_DIR + '/home'
  
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3000,
    hot: true
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"],
        "plugins": ["react-hot-loader/babel"]
      },
      include: APP_DIR
    }]
  }
};

module.exports = config;