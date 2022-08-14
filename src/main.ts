#!/usr/bin/env node


import args from 'args';
import AdmZip from 'adm-zip'
import fs from 'fs';
import FormData from "form-data";
import {Axios} from 'axios';
args
  .option('key', 'API key')
  .option('name', 'name of the miniapp','Tuse test')
  

var flags = args.parse(process.argv)

var folder = process.cwd();

var zip  = new AdmZip()
zip.addLocalFolder(folder);
var bodyFormData = new FormData();
bodyFormData.append('image', zip); 
new Axios().request({
    method: "post",
    url: "http://tuse.tech:9001/api/miniapps",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });