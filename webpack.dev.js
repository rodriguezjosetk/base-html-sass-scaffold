const path = require('path');
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ title: 'Hello! José Rodríguez' }),
	],
	devServer: {
		port: 8001,
	},
	mode: 'development'
});
