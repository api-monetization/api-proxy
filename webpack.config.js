const path = require('path')

module.exports = {
  target: 'webworker',
  resolve: {
    alias: {
      fs: path.resolve(__dirname, './null.js'),
      child_process: path.resolve(__dirname, './null.js'),
      net: path.resolve(__dirname, './null.js'),
      tls: path.resolve(__dirname, './null.js'),
    },
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  },
}