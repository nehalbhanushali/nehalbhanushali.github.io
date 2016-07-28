webpackHotUpdate(0,[
/* 0 */
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ 1);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 183);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 342);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 303);
	
	var _colorManipulator = __webpack_require__(/*! material-ui/utils/colorManipulator */ 301);
	
	var _Merge = __webpack_require__(/*! ./Merge.js */ 343);
	
	var _Merge2 = _interopRequireDefault(_Merge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  spacing: {
	    iconSize: 24,
	    desktopGutter: 24,
	    desktopGutterMore: 32,
	    desktopGutterLess: 16,
	    desktopGutterMini: 8,
	    desktopKeylineIncrement: 64,
	    desktopDropDownMenuItemHeight: 32,
	    desktopDropDownMenuFontSize: 15,
	    desktopDrawerMenuItemHeight: 48,
	    desktopSubheaderHeight: 48,
	    desktopToolbarHeight: 56
	  },
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.grey700,
	    primary2Color: _colors.grey800,
	    primary3Color: _colors.grey900,
	    accent1Color: _colors.pink300,
	    accent2Color: _colors.pink400,
	    accent3Color: _colors.pink500,
	    textColor: _colors.darkBlack,
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	});
	var rootElement = document.getElementById('home-root');
	
	_reactDom2.default.render(_react2.default.createElement(
	  _MuiThemeProvider2.default,
	  { muiTheme: muiTheme },
	  _react2.default.createElement(
	    'div',
	    null,
	    'home'
	  )
	), rootElement);
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(muiTheme, 'muiTheme', '/Users/intern/Desktop/my projects/nehalbhanushali.github.io/TheCookBot/src/home.js');
	
	  __REACT_HOT_LOADER__.register(rootElement, 'rootElement', '/Users/intern/Desktop/my projects/nehalbhanushali.github.io/TheCookBot/src/home.js');
	})();

	;

/***/ }
])
//# sourceMappingURL=0.7a47a634403c78305d00.hot-update.js.map