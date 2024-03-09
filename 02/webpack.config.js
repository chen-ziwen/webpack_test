const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const toml = require("toml");

module.exports = {
    mode:"development",
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
        clean: true
    },
    devServer: {
        static: "./dist",
        port: 8080, // 修改端口号
    },
    // 引入html生成插件，每次编译都会在dist中自动生成html根文件，并自动引入依赖
    plugins: [
        new HtmlWebpackPlugin({
            title: "动态生成html"
        })
    ],
    module: {
        rules: [
            {
                // 加载css
                test: /\.css$/i,
                // 解析css 链式调用
                use: ["style-loader", "css-loader"]
            },
            {
                // 加载图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                // 加载字体
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            // csv类型文件
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader']
            }
        ]
    },

}