const { options } = require('less');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader'
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'img/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            //  配置这里会报错
            // {
            //     test: /\.(png|jpg|gif|jpeg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options:{
            //                 name:'img/[name]_[hash:8].[ext]'
            //             }
            //         }
            //     ]
            // }
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            }
        ]
    },
    //这里指定打包版本：1、runtime-only(不可以包含template)  ;  2.runtime-compiler（代码中可以有template）
    resolve:{
        //别名
        alias:{
            'vue$':'vue/dist/vue.esm.js' //在安装的vue版本中
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}