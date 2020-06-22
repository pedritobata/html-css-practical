const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    //{ loader: 'resolve-url-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'postcss-loader' },
                    /* {
                        loader: 'postcss-loader',
                        options: {
                          config: {
                            ctx: {
                              'postcss-preset-env': {...options},
                              cssnano: {...options},
                            }
                          }
                        }
                      } */
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}