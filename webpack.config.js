const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const nib = require('nib')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development'
})

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
    filename: '[name]/[name].js',
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
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [nib()]
            }
          }
        ]
      }
    ]
  },
  plugins: [extractSass, new UglifyJsPlugin()],
  externals: ['react']
}
