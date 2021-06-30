const path = require('path');
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[contenthash].js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
	],
	mode: 'production'
});
