(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["Example"] = factory(require("react"), require("react-dom"));
	else
		root["Example"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  Created  by  narendrasisodiya  on  07/11/15.
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global ReactJSONViewer*/
var Example = function (_Component) {
    _inherits(Example, _Component);

    function Example() {
        _classCallCheck(this, Example);

        var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this));

        _this.state = {
            userJson: {}
        };

        _this.preSetJSONs = [["Apple", "Banana", "Mango"], {
            name: "Narendra",
            age: 32,
            place: "Delhi"
        }, {
            a: [{
                "task": "Write Book",
                "done": false,
                "created": new Date()
            }, {
                "task": "Learn React",
                "done": true,
                "created": new Date()
            }, {
                "task": "Buy Mobile",
                "done": false,
                "created": new Date()
            }],
            b: [{
                "task": "Write Book",
                "done": false,
                "created": new Date()
            }, {
                "task": "Learn React",
                "done": true,
                "created": new Date()
            }, {
                "task": "Buy Mobile",
                "done": false,
                "created": new Date()
            }]
        }, {
            dateWiseData: {
                "2016-02-14": {
                    availableRooms: 10,
                    soldRooms: 20
                },
                "2016-02-15": {
                    availableRooms: 15,
                    soldRooms: 15
                },
                "2016-02-16": {
                    availableRooms: 5,
                    soldRooms: 25
                },
                "2016-02-17": {
                    availableRooms: 0,
                    soldRooms: 30
                }
            }
        }, {
            name: "Narendra",
            age: 32,
            place: {
                name: "Delhi",
                pin: "110017"
            },
            likes: ["Apple", "Banana", "Mango"],
            test: {
                undefined: undefined,
                null: null
            },
            todos: [{
                task: "Write  Book",
                done: false
            }, {
                task: "Learn  React",
                done: true
            }, {
                task: "Buy  Mobile",
                done: false
            }],
            dateWiseData: {
                "2016-02-14": {
                    availableRooms: 10,
                    soldRooms: 20
                },
                "2016-02-15": {
                    availableRooms: 15,
                    soldRooms: 15
                },
                "2016-02-16": {
                    availableRooms: 5,
                    soldRooms: 25
                },
                "2016-02-17": {
                    availableRooms: 0,
                    soldRooms: 30
                }
            }
        }];
        return _this;
    }

    _createClass(Example, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.btnClick({
                currentTarget: {
                    dataset: {
                        jsonId: 2
                    }
                }
            });
        }
    }, {
        key: "btnClick",
        value: function btnClick(e) {
            this.refs.textarea.value = JSON.stringify(this.preSetJSONs[e.currentTarget.dataset.jsonId], null, "  ");
            this.setState({
                userJson: this.preSetJSONs[e.currentTarget.dataset.jsonId]
            });
        }
    }, {
        key: "keyup",
        value: function keyup() {
            try {
                var x = JSON.parse(this.refs.textarea.value);
                this.setState({
                    userJson: x
                });
            } catch (ex) {
                this.setState({
                    userJson: {
                        errorType: "Parse  Error",
                        error: "" + ex
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "React JSON Viewer"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "https://github.com/nsisodiya/react-json-viewer" },
                    "https://github.com/nsisodiya/react-json-viewer"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Try yourself"
                ),
                _react2.default.createElement(
                    "div",
                    { style: { margin: 10 } },
                    _react2.default.createElement(
                        "button",
                        { "data-json-id": "0", style: { padding: 5, marginLeft: 10 }, onClick: this.btnClick.bind(this) },
                        "Array"
                    ),
                    _react2.default.createElement(
                        "button",
                        { "data-json-id": "1", style: { padding: 5, marginLeft: 10 }, onClick: this.btnClick.bind(this) },
                        "Object"
                    ),
                    _react2.default.createElement(
                        "button",
                        { "data-json-id": "2", style: { padding: 5, marginLeft: 10 }, onClick: this.btnClick.bind(this) },
                        "Array of Object"
                    ),
                    _react2.default.createElement(
                        "button",
                        { "data-json-id": "3", style: { padding: 5, marginLeft: 10 }, onClick: this.btnClick.bind(this) },
                        "Object of Object"
                    ),
                    _react2.default.createElement(
                        "button",
                        { "data-json-id": "4", style: { padding: 5, marginLeft: 10 }, onClick: this.btnClick.bind(this) },
                        "Nested Object 1"
                    )
                ),
                _react2.default.createElement("textarea", { style: {
                        fontSize: 15,
                        fontFamily: "monospace"
                    }, ref: "textarea", onKeyUp: this.keyup.bind(this), placeholder: "Copy  paste  JSON  here", name: "", id: "",
                    cols: "80", rows: "10" }),
                _react2.default.createElement(ReactJSONViewer, { json: this.state.userJson })
            );
        }
    }]);

    return Example;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Example, null), document.getElementById("root"));

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })

/******/ });
});