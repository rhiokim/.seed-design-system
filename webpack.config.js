const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const nib = require('nib')

const extractStyle = new ExtractTextPlugin({
  filename: 'bundle.min.css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: {
    Button: './src/Button/Button.js',
    Container: './src/Container/Container.js',
    Panel: './src/Card/Panel.js',
    Card: './src/Card/Card.js',
    Image: './src/Image/Image.js',
    Badge: './src/Badge/Badge.js',
    Input: './src/Input/Input.js',
    Checkbox: './src/Chceckbox/Checkbox.js',
    Modal: './src/Modal/Modal.js',
    assets: './src/assets/index.js'
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
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                use: [nib()],
                import: ['~nib/lib/nib/index.styl']
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [extractStyle, new UglifyJsPlugin()],
  externals: ['react']
}
