var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  entry : [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['','.js',]
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot' ,'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
       {
                test: /\.scss$/,
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
            }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};