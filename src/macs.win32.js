const { exec } = require('child_process')

module.exports = function (cb) {
  exec('getmac /NH', (err, out) => {
    if (err) {
      return cb(err, out)
    }

    out = out
      .split('\r\n')
      .filter(hw => /[A-F0-9-]+/.exec(hw))
      .map(hw => hw.split(' ')[0])

    return cb(null, out)
  })
}
