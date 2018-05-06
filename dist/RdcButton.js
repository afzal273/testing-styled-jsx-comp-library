var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'components/RdcButton.js';
import _JSXStyle from 'styled-jsx/style';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styles from '../styles/buttons-working';

var RdcButton = function RdcButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'button',
    _extends({}, rest, {
      className: 'jsx-' + styles.__scopedHash + ' ' + (rest.className != null && rest.className || 'rdc-btn'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    React.createElement(_JSXStyle, {
      styleId: styles.__scopedHash,
      css: styles.__scoped
    }),
    children
  );
};

export default RdcButton;