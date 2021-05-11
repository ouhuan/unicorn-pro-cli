
const path = require('path')

module.exports = {
  'mini-program': {
    projectPath: path.join(__dirname, '../template/mini-program'),
    packageJson: require(path.join(__dirname, '../template/mini-program/package.json')),
  },
  'unicorn-h5': {
    projectPath: path.join(__dirname, '../template/unicorn-h5'),
    packageJson: require(path.join(__dirname, '../template/unicorn-h5/package.json')),
  },
  'unicorn-pc': {
    projectPath: path.join(__dirname, '../template/unicorn-pc'),
    packageJson: require(path.join(__dirname, '../template/unicorn-pc/package.json')),
  },
}