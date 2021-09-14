const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');

module.exports = {
    entry: path.resolve(SRC_PATH, 'index.ts'),
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.scss', '.ts'],
        alias: {
            '@src': SRC_PATH,
        },
        modules: ['node_modules'],
    },
};
