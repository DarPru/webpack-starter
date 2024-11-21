const { merge } = require('webpack-merge')
const BasicPart = require('./basic-point.js')
const TerserPlugin = require('terser-webpack-plugin')

const prodWebpackConfig = merge(BasicPart, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin()
        ]
    }

})

module.exports = new Promise((resolve, reject) => {
    resolve(prodWebpackConfig)
})