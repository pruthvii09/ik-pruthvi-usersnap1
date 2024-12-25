import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var Popup = function Popup(_ref) {
  var _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? 'Open Popup' : _ref$buttonText,
    _ref$annotation = _ref.annotation,
    annotation = _ref$annotation === void 0 ? false : _ref$annotation;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var popupStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: isOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    content: {
      position: 'relative',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: 'none',
      background: 'none',
      fontSize: '20px',
      cursor: 'pointer'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    style: popupStyles.button,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, buttonText), /*#__PURE__*/React.createElement("div", {
    style: popupStyles.overlay
  }, /*#__PURE__*/React.createElement("div", {
    style: popupStyles.content
  }, /*#__PURE__*/React.createElement("button", {
    style: popupStyles.closeButton,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("h2", null, "Popup Content"), /*#__PURE__*/React.createElement("p", null, "This is your popup content."), annotation && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Add your annotation here...",
    style: {
      width: '100%',
      minHeight: '100px'
    }
  })))));
};

var renderWidget = function renderWidget(_ref) {
  var target = _ref.target,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  var targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetElement) {
    console.error("Target element ".concat(target, " not found"));
    return;
  }
  var root = ReactDOM.createRoot(targetElement);
  root.render(/*#__PURE__*/React.createElement(Popup, options));
};
if (typeof window !== 'undefined') {
  window.PopupTool = {
    renderWidget: renderWidget
  };
}

export { Popup, renderWidget };
