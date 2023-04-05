const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
        path: __dirname + /build/,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".ts", ".tsx", ".js", ".json"],
                },
                use: "ts-loader",
            },
            {
                test: /\.css$/,
                use: ["css-loader"],
            },
        ],
    },
    devtool: prod ? undefined : "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
        }),
    ],
};
