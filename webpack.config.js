const path = require('path');

const entry_file = path.join(__dirname, 'client', 'src', 'index.js');
const output_dir = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: entry_file,
  output: {
    filename: 'bundle.js',
    path: output_dir
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
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
