const path = require("path");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.s?css$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  });

  // don't forget to return.
  return config;
};
