// import HtmlWebpackPlugin from "html-webpack-plugin";
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    // publicPath: '/ver/'
    // publicPath: './'
    publicPath: ''
  },
  // mode: "development",
  // mode: "production"
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif)$/i,
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8 * 1024
        //     }
        //   }
        // ]
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'source-map' // 开发环境下帮助直接进入源代码位置
}
