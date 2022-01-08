#!/usr/bin/env node


const register = require.resolve('esbuild-register')
const cli = require('nodemon/lib/cli/index');
const run = require('nodemon');
const { getArg, existsSync, filterArg } = require('./utils')

const [input] = getArg();
const { nodemon: nodemonCLIOption } = getArg();

// _ _ 是必须的，查看 nodemon/lib/cli/index.js 源码
const nodemonOption = cli.parse(`_ _ ${(nodemonCLIOption || '').trim()}`);

try {
  existsSync(input) && (nodemonOption.script = input);
  nodemonOption.exec = `node -r ${register} ${filterArg('nodemon')}`;

  run(nodemonOption)
  
} catch (error) {
  console.log(error)
  process.exit(1);
}