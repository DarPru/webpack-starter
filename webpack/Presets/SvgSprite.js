const path = require("path");
const { dirs } = require('../path-file.js');

module.exports = {
    test: /\.svg$/,
    include: path.join(dirs.src, "public", "icons"),
    use: [
        {
            loader: 'svg-sprite-loader',
            options: {
                plainSprite: true,
                extract: true,
                publicPath: 'public/',
                outputPath: 'public/'
            }
        },
        {
            loader: 'svgo-loader',
        },
    ]
}