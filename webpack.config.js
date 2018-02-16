
const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        "bundle": "./src/main.js",
        "bundle.min": "./src/main.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ['transform-decorators-legacy'],
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ // for minify
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};