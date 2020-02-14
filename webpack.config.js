// Webpack uses this to wrok with directories
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do.
module.exports = {
    // Pat to your entry point. From this file, Webpack will begin its work.
    entry: "./src/app.js",

    // Path and filename of your result bundle.
    // Webpack will bundle all Javascript into this file.
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    }
};