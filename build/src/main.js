#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const args_1 = tslib_1.__importDefault(require("args"));
const adm_zip_1 = tslib_1.__importDefault(require("adm-zip"));
args_1.default
    .option('key', 'API key')
    .option('name', 'name of the miniapp', 'Tuse test');
var flags = args_1.default.parse(process.argv);
var folder = process.cwd();
var zip = new adm_zip_1.default();
zip.addLocalFolder(folder);
const FormData = require('form-data');
const fetch = require('node-fetch');
function uploadImage(imageBuffer) {
    const form = new FormData();
    form.append('file', imageBuffer, {
        contentType: 'application/zip',
    });
    return fetch(`http://tuse.tech:9001/api/miniapps`, { method: 'POST', body: form });
}
;
uploadImage(zip.toBuffer());
//# sourceMappingURL=main.js.map