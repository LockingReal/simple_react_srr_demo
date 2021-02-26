const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'src/client/index.html'), // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件名称，该文件存在于内存中，在目录中不显示
})
module.exports = {
    mode:'development',
    entry:path.join(__dirname,"src/client/index.js"),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist'),
        publicPath:'/public/'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        htmlPlugin
    ],
    devServer:{
       hot:true,
       port:'3000',
       overlay:true 
    }
}