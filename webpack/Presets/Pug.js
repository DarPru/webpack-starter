module.exports = {
    test: /\.pug$/i,
    use: [
        {
            loader: 'simple-pug-loader',
            options: {
                pretty: true,
                data: {
                    title: 'My Website'
                }
            }
        }
    ],
}