// Requiring express
const express = require('express');
// Requiring path
const path = require('path');
// Requiring webpack
const webpack = require('webpack');
// Requiring webpack-dev-middleware
const webpackMiddleware = require('webpack-dev-middleware');
// Requiring webpack configuration
const webpackConfig = require('./webpack.config.js');

// Initialise Express App
const app = express();

// COMMENTING LINES 17 & 20 AS THE WEBPACK MIDDLEWARE WILL NOW HANDLE THE RENDERING
// Set accessible static folder
// app.use(express.static('public'));

// Define route
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// Creating the bundle with Webpack
const bundle = webpack(webpackConfig);
// Converting to a middleware which express can understand
const bundleMiddleware = webpackMiddleware(bundle);
// Let express use it as it's middleware
app.use(bundleMiddleware);

// Creating a server that listens on port 3000 for connections
app.listen(3000, () => console.log('Example app listening on port 3000!'));
