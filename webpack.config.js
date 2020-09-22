const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path")

const config = {
  entry: {
      
    main: "./public/index.js",
    db: "./public/db.js"

  }
    ,
  output: {
    path: __dirname + "/public/dist",
    "filename": "[name].js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker App",
      short_name: "Budget App",
      description: "An application for tracking your budget",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
