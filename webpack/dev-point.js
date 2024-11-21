const { merge } = require('webpack-merge')
const BasicPart = require('./basic-point.js')
const { dirs } = require('./path-file.js')

const devWebpackConfig = merge(BasicPart, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: dirs.dist,
        open: true,
        compress: true,
        watchFiles: dirs.src,
        port: 8080
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})