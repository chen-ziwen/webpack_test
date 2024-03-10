const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:{
        index:"./src/index.js"
    },
    output:{
        // 浏览器会缓存，[contenthash] 将根据资源内容创建唯一哈希值。
        // 当资源内容发生变化时，[contenthash] 也会发生变化。
        filename:"[name].[contenthash].js",
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
            title: "缓存"
        }),
    ],
    module: {
        rules: [
            {
                // 加载css
                test: /\.css$/i,
                // 解析css 链式调用
                use: [
                    { loader:"style-loader"},
                    {
                    loader: "css-loader",
                        options:{
                          modules:true
                        }
                    }
                ]
            },
            {
                // 加载图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },

}