const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.export = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    },
                     /*   {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }, */
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}