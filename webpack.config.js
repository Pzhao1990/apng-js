var path = require('path')

module.exports = [
  {
    entry: path.join(__dirname, 'src', 'library', 'parser.js'),
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'apngjs.js', // 文件名
      library: 'apngjs', // 变量名
      libraryTarget: 'var' // 修改打包格式，这样可以通过srcipt标签直接引用
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /[\\\/](node_modules|lib)[\\\/]/
        }
      ]
    }
  },
  {
    entry: path.join(__dirname, 'src', 'demo-page', 'index.js'),
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'index.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /[\\\/](node_modules|lib)[\\\/]/
        },
        {
          test: /\.css$/,
          exclude: /[\\\/](node_modules|lib)[\\\/]/,
          loader: 'style-loader!css-loader'
        }
      ]
    } /*,
     plugins: [
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false,
     screw_ie8: true
     },
     comments: false
     })
     ] */
  }
]
