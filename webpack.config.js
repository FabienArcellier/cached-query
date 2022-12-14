const path = require('path');

module.exports = {
  entry: './src/cached-query.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'cached-query.js',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist'),
  },
};