const path = require('path')

// 在内存中生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new VueLoaderPlugin(),
	],
	module: {
		rules: [{ // 处理.vue文件
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{ // 处理css样式
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{ // 处理scss样式
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ // 图片处理
				test: /\.(jpg|png|git|bmp|jpeg)$/,
				use: 'url-loader?limit=1024'
			},
			{ // 处理文字loader
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'file-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude:/node_modules/
			}
		]
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.js"
		}
	}
}
