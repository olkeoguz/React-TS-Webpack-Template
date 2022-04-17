const { EnvironmentPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const prodConfig = {
  mode: 'production', // This will enable webpack to optimize our build
  devtool: 'source-map',
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      API_KEY: '<PROD API KEY>',
    }),
  ],
};

module.exports = merge(common, prodConfig);
