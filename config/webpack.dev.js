const { EnvironmentPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  // devtools are used to display your original JavaScript while debugging, which is a lot easier to look at than minified production code.
  //In a sense, source maps are the decoder ring to your secret (minified) code.
  //cheap-module-source-map is the one create react app recommends for dev environment.
  plugins: [
    new EnvironmentPlugin({
      URL: {
        base: 'https://jsonplaceholder.typicode.com',
        posts: '/posts',
        API_KEY: '<PROD API KEY>',
      },
    }),
  ],
};

module.exports = merge(common, devConfig);
