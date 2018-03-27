const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "eval",

  entry: ["babel-polyfill", "react-hot-loader/patch", "./client/index.js"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./js/app.bundle.js",
    publicPath: "/"
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    hot: true,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [
          path.resolve(__dirname, "./node_modules/react-native-tab-view")
        ]
      },
      {
        test: /\.css$/,
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: "postcss-loader"
              }
            ]
          })
        )
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          "react-native-web-image-loader?name=img/[name].[ext]",
          "image-webpack-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9-=&.]+)?$/,
        loader: "file-loader", // or directly file-loader
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        )
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "react-navigation": "react-navigation/lib/react-navigation.js",
      "react-native": "react-native-web"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
      }
    }),

    // enable hot module reloading (HMR) globally
    new webpack.HotModuleReplacementPlugin(),

    // index.html custom template
    new HtmlWebpackPlugin({
      title: "Chat-App",
      template: "./index.html",
      favicon: "favicon.ico"
    }),

    // extract css files
    new ExtractTextPlugin("styles.css")
  ]
};
