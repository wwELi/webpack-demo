const common = require('./webpack-common');
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin');
const webpack  = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new uglify({
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            API: JSON.stringify('xxxx/yyyy')
        })
    ]
})