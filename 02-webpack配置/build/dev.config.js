const WebpackServer = require('webpack-dev-server')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports =  webpackMerge(baseConfig,{
    devServer:{
        contentBase:'../dist',
        port:'8080', //可以不指定，不指定的话就是默认8080端口
        inline:true
    }
})
