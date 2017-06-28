//webpack配置文件

var webpack=require("webpack");

var ExtractTextPlugin = require('extract-text-webpack-plugin');//帮助css单独打包
module.exports = {
    entry: [
       // 'webpack/hot/only-dev-server',
        './entry.js'
    ],
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    module: {
        loaders: [
		        {
		            test : /\.(less|css)$/,
		           /*loader: ExtractTextPlugin.extract({//单独打包css
		                loader: 'css-loader'
		            })*/
		           loader:ExtractTextPlugin.extract({//单独打包css和less
		           	fallback:"style-loader",
		           	loader:"css-loader!less-loader"
		           })
		        },
		        { test: /\.js$/, loader: 'babel-loader',exclude: /node_modules/,query: {
		            presets: ['es2015']
		           }
		        },
		        // 解析.vue文件
                { test: /\.vue$/, loader:'vue-loader'},
                //{ test: /\.less$/, loader:'style-loader!css-loader!less-loader'},
	            /*{ test: /\.less$/, loader:ExtractTextPlugin.extract({
		                loader: 'style-loader!css-loader!less-loader'
		                })},*/
	            {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,loader: 'file-loader'},
                {
			        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			        loader: 'file-loader',
			        query: {
			          name: '[name].[ext]?[hash]'
			        }
			      }
                   
        ]
    },
    resolve:{
        extensions:['.css','.js',".vue"]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./dist/styles.css'),//帮助css单独打包
        //new ExtractTextPlugin('./dist/[name].less')
    ]
	
};
