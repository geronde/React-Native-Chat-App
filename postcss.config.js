module.exports = {
  plugins: [
    // eslint-disable-next-line
    require("autoprefixer"),
    // eslint-disable-next-line
    require("cssnano")({
      preset: "default"
    })
  ]
};
