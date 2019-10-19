const core = require('@actions/core')
const {installJIProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const jiprologSpec = core.getInput('jiprolog-version', {required: true})

  console.log(`##[group]Installing JIProlog ${jiprologSpec}`)
  await installJIProlog(jiprologSpec)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-logtalk does not support Windows at this time'
    )
}
