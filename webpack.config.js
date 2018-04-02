//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    // [jwc]+1 presets: ['es2015', 'react']
    // presets: ["es2015", { "modules": false }]
    presets: ['es2015', 'react']
}
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}
