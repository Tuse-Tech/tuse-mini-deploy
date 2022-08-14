#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const args_1 = tslib_1.__importDefault(require("args"));
const adm_zip_1 = tslib_1.__importDefault(require("adm-zip"));
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const buffer_1 = require("buffer");
const xmlhttprequest_1 = require("xmlhttprequest");
args_1.default
    .option('key', 'API key')
    .option('name', 'name of the miniapp', 'Tuse test');
var flags = args_1.default.parse(process.argv);
var folder = process.cwd();
var zip = new adm_zip_1.default();
zip.addLocalFolder(folder);
var data = new form_data_1.default();
data.append('file', new buffer_1.Blob([zip.toBuffer()], { type: 'application/zip' }));
// this works
let request = new xmlhttprequest_1.XMLHttpRequest();
request.open('POST', "http://tuse.tech:9001/api/miniapps");
request.send(data);
//# sourceMappingURL=main.js.map