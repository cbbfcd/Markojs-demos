// 插件引入
var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	src = path.join(__dirname, '../src'),
	HappyPack = require('happypack'),
	env = process.env.NODE_ENV;

// webpack3
module.exports = {
	devtool: '#cheap-source-map',
	entry: [
        "webpack-dev-server/client?http://localhost:9090/#/",
        "webpack/hot/dev-server",
        "whatwg-fetch",
         "./src/index"
	],
	output:{
		path: path.join(__dirname, "../dist"),
        publicPath: "/",
        filename: "bundle.js"
	},
	resolve:{
		extensions:['.js', '.marko', '.less', '.css', '.json'],
		alias: {
			ASSET: path.join(src, 'assets'),
			COMPONENT: path.join(src, 'components'),
			UTIL: path.join(src, 'utils'),
			MOCK:path.join(src, 'mock')
	    }
	},
	resolveLoader: {
	    modules: [path.join(__dirname, '../node_modules')]
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				loader: ['happypack/loader?id=js'],
	        },
	        {
	        	test: /\.marko$/,
	        	exclude: [/node_modules/],
	        	loader: ['happypack/loader?id=marko']
	        },
			{
				test: /\.(css|less)$/,
				use:[
					'happypack/loader?id=styles',
					"resolve-url-loader"
				]
			},
			{
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
						loader: 'url-loader',
						options: {
						query: {
							limit: 10000,
						  	name:'[name].[hash].[ext]'
							}
						}
				    },
                    {
					    loader: 'image-webpack-loader',
					    options: {
					        progressive: true,
					        optipng: {
					            optimizationLevel: 7,
					        },
					        mozjpeg: {
					            quality: 65
					        },
					        gifsicle: {
					            interlaced: true,
					        },
					        pngquant: {
					            quality: '65-90',
					            speed: 4
					        }
					    }
					}
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }
		]
	},
    
	plugins:[
		new webpack.DefinePlugin({
		  'process.env': {
		  	NODE_ENV: JSON.stringify('development')
		  },
		  __DEV__: env === 'development',
		  __PROD__: env === 'production'
		}),
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
		new HappyPack({
			verbose: false,
			id: 'js',
			threads: 4,
			loaders: [ 'babel-loader' ]
		}),
		new HappyPack({
			verbose: false,
			id: 'marko',
			threads: 4,
			loaders: [ 'marko-loader' ]
		}),
		new HappyPack({
			verbose: false,
			id: 'styles',
			threads: 4,
			loaders: [ 'style-loader', 'css-loader', 'less-loader' ,'postcss-loader']
		}),
        new HtmlWebpackPlugin({
        	hash: false,
        	template: path.join(src, 'index.html')
        })
	]
}


