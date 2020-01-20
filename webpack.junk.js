//FAKE webpack configuration to support aliases.
//Copy aliases from .babelrc.js

const path = require('path')
const projectPath = path.resolve(__dirname, './')
const pathToSrc = path.resolve(projectPath, 'src')

module.exports = {
  resolve: {
    alias: {
      '@src': path.resolve(pathToSrc),
      '@store': path.resolve(pathToSrc, 'store'),
      '@actions': path.resolve(pathToSrc, 'store', 'actions')
    }
  }
}
