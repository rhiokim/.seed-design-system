const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    Button: './src/Button/Button.js',
    Panel: './src/Card/Panel.js',
    Card: './src/Card/Card.js',
    Image: './src/Image/Image.js',
    Badge: './src/Badge/Badge.js',
    Input: './src/Input/Input.js',
    Modal: './src/Modal/Modal.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new UglifyJsPlugin()],
  externals: ['react']
}
