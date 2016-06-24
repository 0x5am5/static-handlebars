/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _toggle = __webpack_require__(1);

	var _toggle2 = _interopRequireDefault(_toggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  _createClass(_class, [{
	    key: 'defaultResponse',
	    value: function defaultResponse(e) {
	      return e.currentTarget.classList.contains(this.defaults.className);
	    }
	  }, {
	    key: 'defaultEvent',
	    value: function defaultEvent() {
	      this.defaults.target.addEventListener('click', this.handler.bind(this));
	    }
	  }, {
	    key: 'handler',
	    value: function handler(e) {
	      var defaults = this.defaults || this;

	      if (defaults.response.call(this, e)) {
	        defaults.target.classList.add(defaults.className);
	      } else {
	        defaults.target.classList.remove(defaults.className);
	      }

	      e.preventDefault();
	    }
	  }]);

	  function _class(options) {
	    _classCallCheck(this, _class);

	    if (!options.target) {
	      throw new Error('Please specify a target and className');
	    }

	    this.defaults = {};

	    Object.assign(this.defaults, {
	      event: this.defaultEvent,
	      response: this.defaultResponse,
	      className: 'toggle--active'
	    }, options);

	    this.defaults.event.call(this, this.handler);
	  }

	  return _class;
	}();

	exports.default = _class;
	;

/***/ }
/******/ ]);