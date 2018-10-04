# ES6 Modules

Built-in modules introduced by [TC39](https://github.com/tc39)

Offers the best of both worlds: compact and declarative syntax and asynchronous loading, plus added benefits like better support for cyclic dependencies.

Surprisingly, **imports** are <ins>live read-only views of the exports</ins> unlike _`CommonJS`_ where **imports** are copies of **exports** and consequently not alive.

A simple test is included in the repo.

---

## Test Resources

- [ExpressJS](https://expressjs.com/) - for creating the web server
- [nodemon](https://github.com/remy/nodemon) - for monitoring changes in Node and automatically restarting the server
- [babel-node](https://github.com/babel/example-node-server) - same as _`Node.js`_ CLI, with added benefit of compiling with Babel presets and plugins before running it
- [babel-loader](https://github.com/babel/babel-loader) - transpiling JS
- [babel-preset-env](http://babeljs.io/docs/en/env/) - for compiling ES2015+ to ES5
- babel-core - babel dependency
- [webpack](https://webpack.js.org/) - the beast bundler
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - for generating the view template
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - for converting webpack bundle into a middleware
- [webpack-livereload-plugin](https://github.com/statianzo/webpack-livereload-plugin) - for live reloading of the page

Checkout [here](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04) for the reference on how to setup minimal Node environment with _`Webpack`_ and _`Babel`_
