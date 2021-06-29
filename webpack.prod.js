const path = require('path');
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ title: 'Hello! José Rodríguez' }),
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
	],
	mode: 'production'
});
