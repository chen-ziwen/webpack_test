const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
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
      }
    ]
  }
}
