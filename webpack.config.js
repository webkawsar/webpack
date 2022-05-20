const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'eval',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  
  ],
};