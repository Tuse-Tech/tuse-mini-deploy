#!/usr/bin/env node


import args from 'args';

args
  .option('key', 'API key')
  .option('name', 'name of the miniapp','Tuse test')
  

var flags = args.parse(process.argv)

console.log(`key=${flags.key}`)