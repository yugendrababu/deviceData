const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (_env, { mode }) => ({
  entry: {
    server: path.resolve(process.cwd(), "src/server/index.js"),
  },
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(process.cwd(), "babel.config.js"),
          },
        },
      },
      {
        test: /\.ya?ml$/,
        use: "yaml-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  target: "node",
  node: {
    __dirname: true,
  },
  output: {
    path: path.resolve(process.cwd(), "build"),
  },
});
