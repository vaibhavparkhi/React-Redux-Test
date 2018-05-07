var path = require('path');
var config = {
   entry: './main.js',
	
   output: {
    filename: 'index.js',
    //path: path.resolve(__dirname, 'dist')
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
            
         },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.svg$/, loader: 'svg-react-loader' },
      { test: /\.scss$/, 
        use: [{
        loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["assets/scss/"]
            }
        }] },
      ]
   }
}

module.exports = config;