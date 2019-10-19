const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installJIProlog}

/**
 * Install Logtalk.
 *
 * @param {string} version
 */
async function installJIProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-jiprolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-jiprolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-jiprolog-windows'), [version])
  }
}
