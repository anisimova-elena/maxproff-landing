const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   mode: 'development',
   module: {
      rules: [
      {
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
         },
      {
         test: /\.html$/i,
         loader:'html-loader',
      }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new miniCss({
         filename: 'style.css',
      }),
   ]
};