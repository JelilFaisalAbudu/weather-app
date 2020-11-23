const dotenv = require('dotenv').config({
  path: `${__dirname}/.env`,
});
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
    },
    {
      test: /\.(png|jpeg|jpg|svg|gif)$/,
      use: [{
        loader: 'file-loader',
      }],
    },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
};