// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require("webpack-md5-hash");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = env => { 
    return {
        entry: {
            main: './src/scripts/common.js',
            bootstrap: './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
            common: './src/sass/style.scss',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'public/scripts/[name].js'
        },
        target: env.production ? 'node':'web',
        //externals: [nodeExternals()],
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(eot|ttf|woff|woff2|png|jpg|gif|svg|ico)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?v=[hash:8]',
                            //size lower than 8KB convert file to base64
                            limit: 1,
                            publicPath:  env.production ? 'public/images/':'../../public/images/',
                            outputPath: './public/images/'
                        }
                    }]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'public/css/[name].css',
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/index.html',
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/typeahead-popup.html',
                filename: 'typeahead-popup.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/typeahead-match.html',
                filename: 'typeahead-match.html'
            }),
            new WebpackMd5Hash(), //Help organize the @media styles
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            watchContentBase: true,
        }
    }
};