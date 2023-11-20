const path = require('path');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new Dotenv(),

    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, 'src')],
      exclude: ['*.test.js'],
      root: __dirname,
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      inject: true,
      templateParameters: (compilation, assets, assetTags, options) => {
        return {
          PUBLIC_URL: process.env.PUBLIC_URL,
          compilation: compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            tags: assetTags,
            files: assets,
            options: options
          }
        };
      }
   })
   
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],

      alias: {
        '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
      }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.PUBLIC_URL || '/'
  },
};
