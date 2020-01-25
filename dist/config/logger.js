"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = require("winston");

var level = process.env.LOG_LEVEL || 'debug';
var logger = (0, _winston.createLogger)({
  format: _winston.format.combine(_winston.format.timestamp(), _winston.format.colorize(), _winston.format.simple()),
  transports: [new _winston.transports.Console({
    level: level
  })]
});
var _default = logger;
exports["default"] = _default;