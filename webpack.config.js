var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: [
  	'babel-polyfill',
    './app.js',
    './index.html',
  ],

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      include: [
	        path.resolve(__dirname, "app"),
	      ],
	      loader: "babel-loader",
	      query: {
	      	plugins: ['transform-runtime'],
	        presets: ['react', 'es2015']
	    	}
	    },
	    {
			  test: /\.html$/,
			  loader: "file?name=[name].[ext]",
			}
		]
	}
}	
