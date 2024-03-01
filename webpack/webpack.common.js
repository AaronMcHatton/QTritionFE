const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/assets', to: 'assets' },
    //   ],
    // }
    // {
    //   from: path.resolve(__dirname, '..', './src/assets'),
    //   to: path.resolve(__dirname, '..', './build/assets'),
    // }
    // {
    //   from: path.resolve(__dirname, '..', './src/index.html'),
    //   to: path.resolve(__dirname, '..', './build/index.html'),
    // }
    // {
    //   from: path.resolve(__dirname, '..', './src/favicon.ico'),
    //   to: path.resolve(__dirname, '..', './build/favicon.ico'),
    // }
    // {
    //   from: path.resolve(__dirname, '..', './src/manifest.json'),
    //   to: path.resolve(__dirname, '..', './build/manifest.json'),
    // }
    // {
    //   from: path.resolve(__dirname, '..', './src/sw.
    // })
  ],
  stats: 'errors-only',
}
