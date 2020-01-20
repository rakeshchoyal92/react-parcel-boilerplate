const path = require('path')
const projectPath = path.resolve(__dirname, './')
const pathToSrc = path.resolve(projectPath, 'src')

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['/'],
        alias: {
          '@src': path.resolve(pathToSrc),
          '@store': path.resolve(pathToSrc, 'store'),
          '@actions': path.resolve(pathToSrc, 'store', 'actions')
        }
      }
    ]
  ]
}
