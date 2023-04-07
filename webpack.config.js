const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        tempJs: "./temp.js",
    },
    mode: process.env.NODE_ENV || "development",
    target: "node",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./templates", to: "." }],
        }),
    ],
};
