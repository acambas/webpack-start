var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './js/app.js'],
	output: {
		path: path.resolve('public/assets'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	devServer: {
		contentBase: 'public'
	},
	module: {
		// preLoaders: [
		// 	{ test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
		// ],
		loaders: [
			{
				test: /\.js$/,
				exclude: /\node_modules/,
				loader: "babel-loader",
				query: {
					//plugins: ['transform-runtime'],
					presets: ['react', 'es2015'],
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
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            //{ test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};