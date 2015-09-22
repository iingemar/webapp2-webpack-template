var webpack = require("webpack");

module.exports = {
    entry: "./static/js/entry.js",
    output: {
        filename: "./static/js/build/bundle.min.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};