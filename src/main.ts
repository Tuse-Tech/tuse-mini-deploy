#!/usr/bin/env node


import args from 'args';
import AdmZip from 'adm-zip'
import fs from 'fs';
args
  .option('key', 'API key')
  .option('name', 'name of the miniapp','Tuse test')
  

var flags = args.parse(process.argv)

var folder = process.cwd();

var zip  = new AdmZip()

var s = fs.readdirSync(folder)
console.log(s);