const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "production" } = process.env;

module.exports = {
    entry: "./src/index.ts",
    mode: NODE_ENV,
    target: "node",
    watch: NODE_ENV === "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ["ts-loader"],
        },],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [],
    externals: [nodeExternals()],
};
