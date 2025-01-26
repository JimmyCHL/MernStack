// entry point (file name + path ) ==> next the node_module dependencies => The entry point is implicitly assumed to be src/index.js (default entry file for Webpack if not specified explicitly).
// default configuration - src/index.js
// once - minification, transpilation, reference resolution, bundling is done
// output path and the name of the file <bundle.js>
// all modules that webpack is dependent on is termed as loaders needed
let path = require('path') //path module of node framework
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
/**
 * A Webpack plugin that generates an HTML file in the output directory and automatically injects <script> tags for the bundled JavaScript.
 * This is useful for generating the main HTML page that loads your app
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
//to load the index html file on request
const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'), //dist - distribution
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Webpack will automatically resolve these extensions
    alias: {
      'core-js-pure': path.resolve(__dirname, 'node_modules/core-js-pure'),
    },
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 9090, //localhost:9090
    historyApiFallback: true, //localhost:9090/user
    open: true, //open the browser
    hot: true,
  },
  // Rules of how webpack will take our files, compile & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //avoid processing third-party libraries
        use: {
          // Specifies the loader(s) to use for transforming the files.
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new Dotenv()], //localhost:9090 - loads this html
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = config
