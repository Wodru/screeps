const path = require("path")
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
        library: "main",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: [
                        require.resolve('babel-preset-react'), // React preset is needed only for flow support.
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-stage-2'),
                    ],
                },
            },
        ],
    },
    mode: 'none',
}
