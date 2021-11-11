module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: `${__dirname}/public`,
    filename: "[name].js",
  },
  devServer: {
    contentBase: `public/`,
    watchContentBase: true,
    open: true,
  },
  target: "web",
};