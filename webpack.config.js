var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		vendor: [
			'react',
			'react-dom'
		],
		bundle: [
			'webpack-hot-middleware/client?reload=true',
			'./client/app.js']
	},
	output: {
		path: path.join(__dirname, '/public/assets'),
		publicPath: '/assets/',
		filename: '[name].js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
		new ExtractTextPlugin('styles.css'),
	],
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'js'),
				query: {
					presets: ["react", "es2015"],
					plugins: [
						["react-transform", {
							transforms: [{
								transform: "react-transform-hmr",
								imports: ["react"],
								locals: ["module"]
							}, {
									transform: "react-transform-catch-errors",
									imports: ["react", "redbox-react"]
								}]
						}]
					]
				}
			},

			{
				test: /\.css$/,
				exclude: /\node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
				exclude: /\node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
			{ test: /\.(png|jpg|ttf|woff2|svg|woff)/, loader: 'url-loader?limit=1000' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }
            // //{ test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
	}
};