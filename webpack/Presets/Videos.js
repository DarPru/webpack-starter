const { dirs } = require('../path-file.js');
const path = require("path");

module.exports = {
    test: /\.(webm|mkv|mp4|mov|wmv|flv|avi)(\?.*)?$/,
    include: path.join(dirs.src, "public", "videos"),
    type: 'asset/resource'
}