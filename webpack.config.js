const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const fs = require('fs');
const pugPages = fs.readdirSync('./src/assets/views/pages').filter(file => file.endsWith('.pug'));

module.exports = {
    entry: {
        main: './src/index.js',
        styles: './src/assets/scss/style.scss'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                    data: {
                        title: 'My Website' 
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        ...pugPages.map(page => {
            const pageName = page.replace('.pug', '');
            return new HtmlWebpackPlugin({
                template: `./src/assets/views/pages/${page}`,
                filename: page.replace('.pug', '.html'),
                minify: false,
                inject: 'body',
                templateParameters: {
                    title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page` 
                }
            });
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        }),
    ],
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        open: true,
        watchFiles: ['src/assets/views/**/*.pug'], // Add watching all Pug files including components
    },
};
