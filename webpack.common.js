const path = require('path');

const entryFile = path.join(__dirname, 'client', 'src', 'index.js');
const outputDir = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: entryFile,
  output: {
    filename: 'bundle.js',
    path: outputDir
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
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
