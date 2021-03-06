const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base');

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, 'public');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    port: '5050',
    host: '127.0.0.1',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(PROJECT_ROOT, './src/styles')],
              },
              additionalData: `@import "index";`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, 'index.html'),
      minify: {
        removeComments: true,
      },
    }),
  ],
});
