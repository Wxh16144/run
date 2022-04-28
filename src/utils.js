const fs = require('fs');
const path = require('path');

function getArg() {
  return process.argv.slice(2).reduce((acc, arg) => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=')
      acc[key] = value
    } else {
      acc.push(arg)
    }
    return acc
  }, [])
}

function filterArg(ignoreKeys = []) {
  return Object.entries(getArg())
    .reduce((args, [key, value]) => {
      if (ignoreKeys.includes(key)) return args
      if (key.match(/\d/)) {
        args.push(value)
      } else {
        args.push(value ? `--${key}=${value}` : `--${key}`)
      }
      return args
    }, [])
    .join(' ')
}

module.exports = {
  getArg,
  filterArg,
  existsSync: fs.existsSync || path.existsSync,
}
