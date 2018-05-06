'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  \n  @import \'variables\';\n  \n  .rdc-btn\n    font-weight: 500\n    padding: 0.75em 1.5em\n    display: inline-block\n    border-radius: $border-radius\n    border: 1px solid $color-dark\n    font-size: 1em\n    cursor: pointer\n    &:hover\n       background: blue\n'], ['\n  \n  @import \'variables\';\n  \n  .rdc-btn\n    font-weight: 500\n    padding: 0.75em 1.5em\n    display: inline-block\n    border-radius: $border-radius\n    border: 1px solid $color-dark\n    font-size: 1em\n    cursor: pointer\n    &:hover\n       background: blue\n']);

var _css = require('styled-jsx/css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _css2.default)(_templateObject);