import spawn from 'cross-spawn'

const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

const argv = process.argv.slice(2)
console.log(argv);