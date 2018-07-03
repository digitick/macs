const os = require('os')

switch (os.platform()) {
  case 'linux':
    module.exports = require('./macs.linux.js')
    break
  case 'win32':
    module.exports = require('./macs.win32.js')
    break
  case 'darwin':
    module.exports = require('./macs.darwin.js')
    break
  default:
    throw new Error('Unsupported platform %s', os.platform())
}
