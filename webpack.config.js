const path = require('path');
const UnusedWebpackPlugin = require('unused-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new UnusedWebpackPlugin({
            // Source directories
            directories: [path.join(__dirname, 'src')],
            // Exclude patterns
            exclude: ['*.test.js'],
            // Root directory (optional)
            root: __dirname,
          }),
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
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                },
              },
            ],
          },
          // ... other rules
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
};
