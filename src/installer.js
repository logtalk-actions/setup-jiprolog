const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installJIProlog}

/**
 * Install Logtalk.
 *
 * @param {string} version
 */
async function installJIProlog(version) {
  await exec(path.join(__dirname, 'install-jiprolog-ubuntu'), [version])
}
