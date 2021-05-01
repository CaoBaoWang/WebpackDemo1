const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "my app",
            template: "src/assets/index.html"
        }),
    ],

    module: {
        rules: [
            // {
            //     test: /\.scss$/i,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         },
            //         // Compiles Sass to CSS
            //         {
            //             loader: "sass-loader",
            //             options: {
            //                 implementation: require("dart-sass")
            //             }
            //         }
            //     ],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",

                ],
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.styl$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ], // compiles Styl to CSS
            },

        ]
    }
}
;


