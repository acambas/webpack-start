var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./js/app.js'],
	output: {
		path: path.join(__dirname, '/public/assets'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('styles.css'),
	],
	devtool: 'cheap-module-eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'js')
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
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            // //{ test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
	}
};