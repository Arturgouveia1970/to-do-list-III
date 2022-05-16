const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { merge } = require('lodash');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/to-do-list-III/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js'],
  },
};
