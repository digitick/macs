const fs = require('fs')
const path = require('path')

module.exports = function (cb) {
  fs.readdir('/sys/class/net', (err, files) => {
    if (err) {
      return cb(err, null)
    }

    files = files
      .filter(file => {
        return file !== 'lo'
      })
      .map(file => {
        return path.join('/sys/class/net', file, 'address')
      })
      .map(file => {
        return fs.readFileSync(file).toString('ascii').trim()
      })

    return cb(null, files)
  })
}
