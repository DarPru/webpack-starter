const MiniCssExtractPlugin = require("mini-css-extract-plugin").loader;
module.exports = {
    test: /\.(scss|css)$/,
    use: [
        MiniCssExtractPlugin,
        {
            loader: 'css-loader'
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        ['postcss-preset-env', {
                            browsers: 'last 2 versions'
                        }],
                    ],
                },
            },
        },
        {
            loader: 'sass-loader'
        }
    ],
}