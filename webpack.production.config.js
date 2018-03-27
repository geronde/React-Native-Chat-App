const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  devtool: "cheap-module-source-map",

  entry: ["react-hot-loader/patch", "./client/index.js"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              // query: { sourceMap: false },
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
      },
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
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          "react-native-web-image-loader?name=img/[name].[ext]",
          "image-webpack-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9-=&.]+)?$/,
        loader: "file-loader?name=fonts/[name].[ext]", // or directly file-loader
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
    // index.html custom template
    new HtmlWebpackPlugin({
      title: "Chat-App",
      template: "./index.html",
      favicon: "favicon.ico"
    }),

    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
      }
    }),

    // extract css files
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    }),
    new UglifyJsPlugin({
      cache: true,
      sourceMap: false,
      exclude: [/\.min\.js$/gi],
      uglifyOptions: {
        mangle: true,
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        },
        output: {
          comments: false,
          beautify: false
        }
      }
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
  ]
};
module.exports = config;
