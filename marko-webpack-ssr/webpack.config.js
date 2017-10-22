'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    // Add source map support
    devtool: "#cheap-source-map",
    entry: "./src/pages/home/client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap', use: 'css-loader?sourceMap!less-loader' })
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                query: {
                    name: 'static/images/[hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
            // Avoid publishing files when compilation failed:
            new webpack.NoErrorsPlugin(),

            // Write out CSS bundle to its own file:
            new ExtractTextPlugin({ filename: 'static/bundle.css', allChunks: true }),

            new CopyWebpackPlugin([
            {
              context: path.join(__dirname, 'src/vendor'),
              from: '**/*',
              to: path.join(__dirname, 'static/vendor'),
              ignore: ['*.md','*.mdown']
            }
        ])
    ]
};