#!/usr/bin/env node


import args from 'args';
import AdmZip from 'adm-zip'
args
  .option('key', 'API key')
  .option('name', 'name of the miniapp','Tuse test')
  

var flags = args.parse(process.argv)

var folder = process.cwd();

var zip  = new AdmZip()
zip.addLocalFolder(folder);
const FormData = require('form-data');
const fetch = require('node-fetch');

function uploadImage(imageBuffer) {
  const form = new FormData();
  form.append('file', imageBuffer, {
    contentType: 'application/zip',
  });
  return fetch(`http://tuse.tech:9001/api/miniapps`, { method: 'POST', body: form })
};

uploadImage(zip.toBuffer())