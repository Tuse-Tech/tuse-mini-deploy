#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const args_1 = tslib_1.__importDefault(require("args"));
const adm_zip_1 = tslib_1.__importDefault(require("adm-zip"));
const fs_1 = tslib_1.__importDefault(require("fs"));
args_1.default
    .option('key', 'API key')
    .option('name', 'name of the miniapp', 'Tuse test');
var flags = args_1.default.parse(process.argv);
var folder = process.cwd();
var zip = new adm_zip_1.default();
var s = fs_1.default.readdirSync(folder);
console.log(s);
//# sourceMappingURL=main.js.map