const path = require("path");
const postcssConfig = require("./postcss.config");

/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  target: "web",
  entry: {
    main: "./src/index.jsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    copy: {
      patterns: [
        {
          from: "public",
        },
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: postcssConfig,
            },
          },
        ],
        type: "css",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
};

module.exports = config;
