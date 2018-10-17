const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" }, 
                    { 
                        // https://github.com/webpack-contrib/css-loader
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]'
                        }  
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon:'./src/images/favicon.ico', //favicon路径
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ],
    devServer: {
        port: 5000,
        historyApiFallback: true,
    }
};