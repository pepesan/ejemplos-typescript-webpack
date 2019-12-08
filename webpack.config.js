const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const basePath = __dirname;
const distPath = 'dist';

const indexInput = './src/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  entry: {
    'app': './src/app/app.ts'
  },
  output: {
    path: path.resolve(basePath, distPath),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indexInput,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/,
    })
  ]
};
module.exports = webpackInitConfig;

