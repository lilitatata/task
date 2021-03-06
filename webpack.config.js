const {
    VueLoaderPlugin
  } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join }= require('path')
module.exports ={
    mode:"development",
    entry:"./src/main.js",
    output:{
        path: join(__dirname, 'dist'),
        filename : "webpack-demo.js",
        clean : true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css/i,
                // 解析规则:从后向前
                // style-loader 放在 css-loader之前
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.less$/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|gif|peg)$/i,
                type: "asset",
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/i,
                type:"asset/resource",
                generator:{
                    filename :'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                use:["babel-loader"],
            },
            {
                test: /\.vue/i,
                use: ['vue-loader']
              }
        ]
    }
}