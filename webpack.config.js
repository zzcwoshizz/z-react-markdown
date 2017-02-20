var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var plugins = [
    new HtmlWebpackPlugin({
        title: '',
        filename: 'index.html',
        template: './index.html'
    })
];

module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\//, to: '/index.html'}
            ]
        },
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [autoprefixer]
                }
            }]
        }]
    },
    plugins,
    // externals: require('./package.json').dependencies
};
