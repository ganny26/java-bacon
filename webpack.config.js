'use strict';

const fs = require('fs');
const webpack = require('webpack');
const BUNDLE_FILE_NAME = "javascripts/app-[name].js";

module.exports = {
  mode:'development',
  devtool: 'cheap-module-source-map',
  context: __dirname + "/client",
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    crossOriginLoading: 'anonymous',
    path: __dirname + "/public",
    filename: BUNDLE_FILE_NAME
  },
  profile: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.(eot|woff|ttf|svg|woff2|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              emitFile: true,
              name: '[name][hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./",
    hot: true,
    inline: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
};
