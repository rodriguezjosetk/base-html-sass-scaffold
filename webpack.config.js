const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	plugins: [new HtmlWebpackPlugin({ title: 'Hello! José Rodríguez' })],
	devServer: {
		port: 8001,
	},
	mode: 'development'
};
