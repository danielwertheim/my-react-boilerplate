var
  path = require('path'),
  name = (process.env.NODE_ENV || 'development').trim(),
  isServing = path.basename(process.mainModule.filename) === 'webpack-dev-server.js';

module.exports = {
  name: name,
  isServing: isServing,
  isProduction: name !== 'development',
  paths: {
    srcDir: path.join(__dirname, 'src'),
    baseDir: path.join(__dirname, 'src'),
    distDir: path.join(__dirname, 'wwwroot')
  }
};