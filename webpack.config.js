const path = require('path')
const webpack = require('webpack')
// const HTMLWebpacklPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry : './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            }, 
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                   filename: 'images/[name][ext]'
                }
            },
        ]
    }



}