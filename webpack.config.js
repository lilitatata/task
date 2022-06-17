const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join }= require('path');
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
        })
    ],
    module:{
        rules:[
            {
                test:/\.css/i,
                // 解析规则:从后向前
                // style-loader 放在 css-loader之前
                use:["style-loader","css-loader"]
            },
            {
                test: /\.less$/i,
                use:["style-loader","css-loader","less-loader"]
            },
        ]
    }
}