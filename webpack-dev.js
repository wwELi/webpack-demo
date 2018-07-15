const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common')
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	// performance: {
	// 	hints: false  // entiry 对大小有限制会每次waring 所以使用此配置关闭限制
	// },
	mode: 'none',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			API: JSON.stringify('zzzz/yyyy')
		}),

		new uglify({
            sourceMap: true
        }),
	],
	devServer: {
		hot: true,
		// mode: "production",
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
		before: (app)=> {
			app.get('/ss/aa', (req, res) => {
				res.json({key: 'www'});
			})
		},
		proxy: {
			'/web-portal/yangyang/system': {
				target: 'http://yangyang-ccms.fenxibao.com',
				changeOrigin: true
			}
		},
		after: (app)=> {
			app.get('/node', (req, res)=> {
				res.json({key: 'AAA'});
			})
		},
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: path.posix.join('/', 'logon.html')}
			]
		},
		// host: '127.0.0.1'
		// useLocalIp: true,
		watchContentBase: true, // 监听文件变化reload
		// socket: 'socket',
		// public: 'xxx.aaa:9000'
	}
});