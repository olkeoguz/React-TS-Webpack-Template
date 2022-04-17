const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    // Where files should be sent once they are bundled. bundle.js under the build folder
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // Extensions allow us to import files without declaring the file extension (.js or .ts at the end)
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      // Rules of how webpack will take our files, complie & bundle them for the browser
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/, // do not use this loader for any node_modules files
        use: [
          {
            loader: 'babel-loader', // or we can use ts-loader
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'], // the order matters. Loaders are in reverse order.
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
        // In webpack 4 we used to need additional loader like file-loader for images and etc. But in version 5 we have support out of the box
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // injects the bundle.js file into index.html file and places index.html into build folder
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
