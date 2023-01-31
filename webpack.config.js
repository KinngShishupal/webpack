const path = require("path"); // we cannot use import key word in webpack so going the old ways
module.exports = {
  entry: "./src/index.js", //webpack entry point, webpack will start build process from this file
  output: {
    // file which will be generated as a result of the build process
    filename: "bundle.js", // this generates bundle.js file in dist folder
    // path: "./dist", this will not work as absolute path is required not relative path
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "dist/", // it will for static assests in dist folder, this case is bydefault hanlded by webpack 5, no need to specifically mention here
    // publicPath: "https://some-cdn.com", it will look for images at this location
    publicPath: "dist/", // it tells from where the assests should be taken from, in webpack 5 it is by default set to publicPath: "auto"
  },

  mode: "none",
  module: {
    // we will write rules that will tell webpack how to import image files
    rules: [
      {
        test: /\.(png|jpg)$/, // regular expression that checks if filename contains png or jpg
        // for loaders we have use and for assets we have type, type can be one of four values
        //    1. asset/resource
        //    2. asset/inline
        //    3.asset
        //    4.asset/source

        type: "asset/resource",
      },
    ],
  },
};
