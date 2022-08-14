#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const args_1 = tslib_1.__importDefault(require("args"));
args_1.default
    .option('key', 'API key')
    .option('name', 'name of the miniapp', 'Tuse test');
var flags = args_1.default.parse(process.argv);
console.log(`key=${flags.key}`);
//# sourceMappingURL=main.js.map