// SPA - Single Page Application

// backend - a server with restful api's to save/update/fetch the information

// frontend - creates ui on the fly, using js-libraries like react, angular, vue etc, uses rest api to save info

// one and only html rendered to create DOM, structure on the browser (very first call) - index.html
// index.html <<contains -seo/>sem tags (used for setting higher rank in search engines)>
// index.html <<contains - a reference to js file which bundle entire application built using react/angular in core js>
// index.html <<contains - a root container where the entire application from bundleJs is rendered>

// bundle.js is
// transpiled collection of resolved and minified javascript files, used to write each component and its features.
// javascript files - are libraries like react/angular, pages like home, product, cart, signIn etc...
// bundle.js also contains - minified css core libraries and the css local files.
// bundle.js also contains - links to the media (images, videos etc) or media itself.

// transpilation
// conversion of typescript, es6, react/angular - keywords, features into normal js format, which can run on any browser.
// babel - libraries to convert es6, ts, react/angular code into - normal js format.
// babel - has its own configurations

// bundling
// bundling - it is the process of combining javascript, css, html, media, files, so that every file contains the
//           referenced file, ensures loading of the needed file goes flawless and also reduces redundancy.
// bundling -needs a tool like task runner (gulp, grunt, bower and webpack etc)

// minification and code optimization
// minification - the process of removal of extra spaces, commented code, redundant code is termed as minification.
// code optimization - replacing the large variable names, complex large variables etc ..
// is done by additional library with task runner (webpack)

// Hosting the frontend
// We can host via express, webpack is better solution as it can do all other above tasks like
// transpilation, bundling, minification, compression, split etc... along with giving host from node.

// - babel-loader
/**
 * A loader for Webpack that tells Webpack to use Babel for transpiling JavaScript files.
 * It acts as a bridge between Webpack and Babel,
 * ensuring that all JS files are processed by Babel before being bundled by Webpack.
 */

// - html-webpack-plugin
/**
 * A Webpack plugin that simplifies the creation of an HTML file to include the bundled assets.
 * This plugin injects the necessary script and link tags into an HTML file,
 * making it easy to load the bundled JavaScript and CSS.
 */

// "devDependencies": {
//     "@babel/core": "^7.23.6", // manage the babel transformation process
//     "@babel/preset-env": "^7.23.6", //converting es6 to core js
//     "@babel/preset-react": "^7.23.3", //converting react syntax to core js
//     "babel-loader": "^9.1.3",
//     "css-loader": "^6.8.1", //helper library to convert the css into js  bundle
//     "html-webpack-plugin": "^5.5.4", //helps to launch our html page with necessary links for css or javascript while serving the request
//     "style-loader": "^3.3.3", // helps load css into html <style> tag
//     "webpack": "^5.89.0", //bundling, task runner, loader, configuration runner, bower runner
//     "webpack-cli": "^5.1.4", // to run web pack command like - serve, build etc
//     "webpack-dev-server": "^4.15.1" // front end application host
//   },

//npm i -D @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin style-loader webpack-cli webpack-dev-server
//copy the package.json
//run npm i
