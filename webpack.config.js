const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry:__dirname+'/src/ManageSystem.js',
	output:{
		path:__dirname+'/build',
		filename:'bundle.js'
	},
	devtool:'eval-source-map',
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}],
				
			},
			{
				test:/\.less$/,
				exclude:/node_modules/,
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:['css-loader','less-loader']
				})
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
		        'process.env': {
		            NODE_ENV: JSON.stringify('development')
		        }
		}),
		new ExtractTextPlugin('css/all.css')
	]
}