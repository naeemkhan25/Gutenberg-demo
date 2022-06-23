const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/block.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "block.js",
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
};
