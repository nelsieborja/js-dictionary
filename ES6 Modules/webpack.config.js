// Requiring path for resolving paths
const path = require('path');
// Requiring html-webpack-plugin for setting the view template
// THe bundled script will be injected automatically by the plugimn
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Requiring webpack-livereload-plugin for live reloading the page
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  // Since this is only for testing purpose, hence hardcoded
  mode: 'development',

  // Pointing the main entry JS file
  entry: './js/app.js',

  // Setting the output config
  output: {
    // Path where output will be saved
    path: path.resolve(__dirname, 'public'),
    // Filename of bundled JS file
    filename: 'bundle.js'
  },

  // Setting plugins that will help the App to work as expected
  plugins: [
    // Setting the view template
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    // This will auto reload the page while making changes from server/client code
    new LiveReloadPlugin()
  ],

  // Setting mobules that will help produce the expected output
  module: {
    rules: [
      {
        // Transpiling JS using Babel
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
