const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join }= require('path');
module.exports ={
    entry:"./src/main.js",
    output:{
        path: join(__dirname, 'dist'),
        filename : "webpack-demo.js",
        clean : true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        })
    ]
}