const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        optimization: {
            sideEffects: false
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/)
        ]
    },
    css: {
        sourceMap: process.env.NODE_ENV === 'production'
    }
};
