#!/usr/bin/env node

import { resolve } from 'import-meta-resolve'
import { parse } from 'nodemon/lib/cli/index.js'
import run from 'nodemon'

import { getArg, existsSync, filterArg } from './utils.js'

const [input] = getArg();
const { nodemon: nodemonCLIOption } = getArg();

// _ _ 是必须的，查看 nodemon/lib/cli/index.js 源码
const nodemonOption = parse(`_ _ ${(nodemonCLIOption || '').trim()}`);

async function main() {
  const loaderPath = await resolve('esbuild-node-loader', import.meta.url);
  existsSync(input) && (nodemonOption.script = input);
  nodemonOption.exec = `node --experimental-loader ${loaderPath} --no-warnings ${filterArg('nodemon')}`;

  run(nodemonOption)
}

try {
  main()
} catch (error) {
  console.log(error)
  process.exit(1);
}
