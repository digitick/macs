const { exec } = require('child_process')

module.exports = function (cb) {
  exec('/sbin/ifconfig -a | grep -Eo "ether .+"', (err, out) => {
    if (err) {
      return cb(err, null)
    }

    out = out
      .trim()
      .split('\n')
      .map(hw => hw.trim().replace('ether ', ''))

    return cb(null, out)
  })
}
