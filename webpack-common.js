const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
		  app: './src/index.js',
		  logon: './logon.js'
    },
    devtool: 'inline-source-map',
    output: {
		  filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
		  publicPath: '/'
    },
    plugins: [
		  new webpack.DefinePlugin({
			  'process.env.NODE_ENV': JSON.stringify('www') // 定义变量
      }),
      
      new webpack.HotModuleReplacementPlugin(), // 动态刷新
      
      new CleanWebpackPlugin(['dist']), // 每次打包清除指定文件
      
		  new HtmlWebpackPlugin({
			  title: 'hello world',
			  filename: 'test.html',
			  template: 'template.html',
			  chunks: ['app'],
			  excludeChunks: ['logon']
      }),
      
		  new HtmlWebpackPlugin({
			  title: 'logon ... ',
			  filename: 'logon.html',
			  template: 'logon.html',
			  chunks: ['logon'],
			  excludeChunks: ['app']
          }),
          new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            automaticNameDelimiter: '_',
            name: true,
            cacheGroups: {
                commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
                },
                // a: {
                //     name: "commons",
                //     chunks: "initial",
                //     minChunks: 2
                // }
              }
        }
    }
}