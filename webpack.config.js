const path = require("path");

module.exports = {
  entry: "./src/css/index.js",
  output: {
    filename: "style.css",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
