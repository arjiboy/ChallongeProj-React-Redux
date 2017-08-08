const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
	entry: './src/Index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist'
	},
	module: {
		rules: [
    		{ 
    			test: /\.js$/,
    			exclude: /node_modules/,
    			use:[
                    {
                    loader: "babel-loader",
                    /*options: {
                        presets: ['es2015','react']
                    }*/}
                ]
    		},
    		{ 
    			test: /\.css$/,
    			use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]  			
    		}
  		]
	},
    plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
	