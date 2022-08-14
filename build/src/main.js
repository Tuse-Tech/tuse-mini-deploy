#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const args_1 = tslib_1.__importDefault(require("args"));
const adm_zip_1 = tslib_1.__importDefault(require("adm-zip"));
const axios_1 = require("axios");
args_1.default
    .option('key', 'API key')
    .option('name', 'name of the miniapp', 'Tuse test');
var flags = args_1.default.parse(process.argv);
var folder = process.cwd();
var zip = new adm_zip_1.default();
zip.addLocalFolder(folder);
var bodyFormData = new FormData();
bodyFormData.append('image', zip.toBuffer());
new axios_1.Axios().request({
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
//# sourceMappingURL=main.js.map