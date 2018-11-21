const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jquery = require('jquery');
const webpack = require('webpack');
const jqueryPlugin = new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'window.jQuery': "jquery"
})
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    mode:"development",
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'./dist')
    },
    plugins:[
        htmlPlugin,
        jqueryPlugin
    ],
    module: {
        rules:[
            {test: /\.js|jsx$/, use: "babel-loader", exclude:/node_modules/},
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.png|jpg|gif|svg|woff|woff2|ttf|eot$/, use:'file-loader'}
        ]
    },
    resolve: {
        extensions:[
            '.js', '.jsx', '.json'
        ],
        alias: {
            'SeComPath': path.join(__dirname,'./SemanticUI/dist/components'),
            'ComPath': path.join(__dirname,'./components')
        }
    }
}