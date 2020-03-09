var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  devServer: {
    //index.htmlがあるフォルダ名
    contentBase: "src",
    open: true
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      },
      //css/sass-loader
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          /*
          MiniCssExtractPlugin.loader,
          */
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ],
      },
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
  ]
};
