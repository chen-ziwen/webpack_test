const path = require("path");
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    // 入口文件就是一些需要被编译到dist中的js文件
    // 编译后的js文件通过script引入到html中
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
        banner: "./src/banner.js",
        tabs: "./src/tabs.js",
    },
    // 编译出来的html执行时，哪里有报错可以明确的指定
    devtool: 'inline-source-map',
    // 以下配置告知
    // webpack-dev-server将dist目录下的文件作为可访问资源部署在localhost:8080。
    // npm start 运行脚本后会将网页挂载在一个本地端口，每次修改后，都会重新去编译。
    devServer: {
        static: "./dist",
        port: 5820, // 修改端口号
    },
    // 引入html生成插件，每次编译都会在dist中自动生成html根文件，并自动引入依赖
    plugins: [
        new HtmlWebpackPlugin({
            title: "动态生成html"
        })
    ],
    // 出口文件就是将入口文件中的那些js，编译到指定地址的文件夹中
    // [name]为动态名，可以自动匹配入口文件的基本文件名(basename)
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // 每次编译都会清空dist文件夹，然后重新生成目标文件
    },
    // 加入一些解析模块
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
            },
            //
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    },
    // 由于在这个示例中单个HTML页面有多个入口，
    // 所以添加了 optimization.runtimeChunk: 'single' 配置
    optimization: {
        runtimeChunk: "single"
    }
}
