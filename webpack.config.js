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
                template: './src/template/typeahead/typeahead-popup.html',
                filename: 'uib/template/typeahead/typeahead-popup.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/typeahead/typeahead-match.html',
                filename: 'uib/template/typeahead/typeahead-match.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/tooltip/tooltip-popup.html',
                filename: 'uib/template/tooltip/tooltip-popup.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/tooltip/tooltip-template-popup.html',
                filename: 'uib/template/tooltip/tooltip-template-popup.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/accordion/accordion.html',
                filename: 'uib/template/accordion/accordion.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/accordion/accordion-group.html',
                filename: 'uib/template/accordion/accordion-group.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/alert/alert.html',
                filename: 'uib/template/alert/alert.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/carousel/carousel.html',
                filename: 'uib/template/carousel/carousel.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/carousel/slide.html',
                filename: 'uib/template/carousel/slide.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/datepicker/datepicker.html',
                filename: 'uib/template/datepicker/datepicker.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/datepicker/day.html',
                filename: 'uib/template/datepicker/day.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/datepicker/month.html',
                filename: 'uib/template/datepicker/month.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/datepicker/year.html',
                filename: 'uib/template/datepicker/year.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/datepickerPopup/popup.html',
                filename: 'uib/template/datepickerPopup/popup.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/modal/window.html',
                filename: 'uib/template/modal/window.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/pager/pager.html',
                filename: 'uib/template/pager/pager.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/pagination/pagination.html',
                filename: 'uib/template/pagination/pagination.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/popover/popover.html',
                filename: 'uib/template/popover/popover.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/popover/popover-html.html',
                filename: 'uib/template/popover/popover-html.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/popover/popover-template.html',
                filename: 'uib/template/popover/popover-template.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/progressbar/bar.html',
                filename: 'uib/template/progressbar/bar.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/progressbar/progress.html',
                filename: 'uib/template/progressbar/progress.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/progressbar/progressbar.html',
                filename: 'uib/template/progressbar/progressbar.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/rating/rating.html',
                filename: 'uib/template/rating/rating.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/tabs/tab.html',
                filename: 'uib/template/tabs/tab.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/tabs/tabset.html',
                filename: 'uib/template/tabs/tabset.html'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/template/timepicker/timepicker.html',
                filename: 'uib/template/timepicker/timepicker.html'
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