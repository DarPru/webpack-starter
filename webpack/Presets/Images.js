const { dirs } = require('../path-file.js');
const path = require("path");

module.exports = {
    test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
    exclude: path.join(dirs.src, "public", "icons"),
    type: 'asset/resource'
}