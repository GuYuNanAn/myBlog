const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包的时候清除上一次的打包文件
module.exports = {
    mode: 'development', //环境为开发模式
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        //html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        //VueLoaderPlugin 的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
        // 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: 1301,
        publicPath: '/',
        historyApiFallback: true
    }
}