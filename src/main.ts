#!/usr/bin/env node


import args from 'args';
import AdmZip from 'adm-zip'
import FormData from 'form-data';
import {Blob} from 'buffer';
import {XMLHttpRequest} from 'xmlhttprequest';
args
  .option('key', 'API key')
  .option('name', 'name of the miniapp','Tuse test')
  

var flags = args.parse(process.argv)

var folder = process.cwd();

var zip  = new AdmZip()
zip.addLocalFolder(folder);
var data = new FormData();
data.append('file', new Blob([zip.toBuffer()], { type: 'application/zip' }));
// this works
let request = new XMLHttpRequest();
request.open('POST', "http://tuse.tech:9001/api/miniapps");
request.send(data);