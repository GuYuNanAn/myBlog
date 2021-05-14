const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包的时候清除上一次的打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//单独打包css
const TerserJSPlugin = require('terser-webpack-plugin');//压缩js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')//css压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js
// const CompressionWebpackPlugin = require('compression-webpack-plugin');//gzip打包
module.exports = {
    mode: 'production', //环境为开发模式
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: ['.js', '.vue']//当引入模块时不带文件后缀 webpack会根据此配置自动解析确定的文件后缀
        // modules: [ // 优化模块查找路径
        //path.resolve('src'),
        //path.resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
        //]
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,//不能和style-loader一起使用
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    optimization: {    // 打包优化项
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                parallel: true,//异步执行
                terserOptions: {
                    compress: {
                        warnings: false,
                        // pure_funcs: ['console.log'],
                        // pure_funcs: []
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                },
                extractComments: false//是否将注释剥离到单独的文件中
            }),// js压缩可配置
            new OptimizeCssAssetsWebpackPlugin(),    // css压缩可配置
        ]
    },
    plugins: [
        //html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true, // 去除回车换行符以及多余空格
                removeComments: true, // 删除注释
                // removeAttributeQuotes: true
            }
        }),
        //VueLoaderPlugin 的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
        // 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style[chunkhash:8].min.css'
        }),
        // new CompressionWebpackPlugin({
        //     filename: '[path].gz[query]',
        //     test: new RegExp('\\.(js|css)$'),
        //     algorithm: 'gzip',
        //     threshold: 10240,
        //     minRatio: 0.8,
        //     deleteOriginalAssets: true
        // })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: 1301,
        publicPath: '/',
        historyApiFallback: true
    }
}