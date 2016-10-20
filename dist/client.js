'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./js/index');

var _index2 = _interopRequireDefault(_index);

var _comments = require('comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constructAll = function constructAll() {
  _index2.default.init().then(function () {
    console.log('comments done');
  });
  _comments2.default.init();
  document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

exports.default = _index2.default;

