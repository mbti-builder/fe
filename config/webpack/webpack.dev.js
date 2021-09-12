const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.js');
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, "public");

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        hot: true,
        inline: true,
        port: '5050',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
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
