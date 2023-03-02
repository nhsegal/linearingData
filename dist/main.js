/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  box-sizing: border-box;\n}\nh1 {\n  font-size: 32px;\n  margin: 1rem 2rem;\n}\n\nh2 {\n  font-size: 22px;\n  margin: 1rem 0.1rem 0.5rem 0rem;\n}\n\n#explanation {\n  display: none;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin-left: 1em;\n  background: #F5F5F5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nmain{\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.left{\n  width: calc(50% - 250px);\n  padding: 1rem;\n}\n\n\n\n.chart-container{\n  width: 490px;\n  height: 500px;\n  border: 1px solid black;\n  padding: 25px 2px 5px 10px; \n  border-radius: 10px;\n  background-color: white;\n}\n\n\n.right{\n  width: calc(50% - 250px);\n  padding: 0rem 1rem;\n}\n\ninput[type=button] {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 100%;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 100%;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0;\n}\n\ninput[type=range] {\n  margin: 0 0 0 2rem;\n}\n\ninput[type=radio] {\n  margin: 0 0 0 2rem;\n}\n\nspan {\n  margin-left: 0px;\n}\n\n#eq {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap:2px;\n  font-size: 2rem;\n}\n\n\n #dep-var, #indep-var{\n  display: inline;\n  font-size: 2rem;\n}\n\n#exp{\n  position: relative;\n  top: -1.5rem;\n}\n\n\nul {\n  font-family: sans-serif;\n\n}\n\n.eq-label {\n  margin-left: 2rem;\n}\n\n\n.trendline-container-math {\n  font-size: 1.75rem;\n  border: 1px solid grey;\n  border-radius: 10px;\n  height: 3rem;\n  width: 80%;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n  padding-top: 6px;\n  text-align: center;\n  background-color: rgb(230, 230, 230);\n  font-family: 'Times New Roman', Times, serif;  \n}\n\n#trendline-equation-x-math{\n  font-style: italic;\n}\n\n#trendline-equation-y-math{\n  font-style: italic;\n}\n\n.trendline-container-physics {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.75rem;\n  border: 1px solid red;\n  border-radius: 10px;\n  height: 3rem;\n  width: 80%;\n  margin-left: 2rem;\n  padding-top: 6px;\n  text-align: center;\n  background-color: rgb(252, 252, 37);\n}\n\n\n.trendline {\n  display: inline-block;\n}\n\n\n.fraction {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle; \n  letter-spacing: 0.001em;\n  text-align: center;\n  font-size: 14px;\n  }\n\n.fraction > span { \n  display: block; \n  }\n.fraction span.fdn {border-top: thin solid black;}\n.fraction span.bar {display: none;}\n\n#coefficient {\n  width: 4rem;\n  height: 2rem;\n}\n\n#modal {\n  display: none;\n}\n \n#modal.visible {\n  position: fixed;\n  top: 0rem;\n  left: 0vh;\n  padding: 0.5rem 1rem;\n  background-color: white;\n  border: 1px black solid;\n  display: block;\n  z-index: 1;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  font-family:Arial, Helvetica, sans-serif\n}\n\n#modal-button {\n  width: 16rem;\n  position: absolute;\n  top: 1rem;\n  right:2rem;\n  background-color: rgb(200,200,200);\n}\n\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.trendline-container-fitted {\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: blue;\n  font-size: 1rem;\n  position: relative;\n    left: 9rem;\n    top: -9rem;\n}\n\n#trendline-equation-x-3, #trendline-equation-y-3, #trendline-equation-slope-3{\n  font-size: 1.5rem;\n  font-family: 'Times New Roman', Times, serif; \n}\n#trendline-equation-slope-3{\nmargin: 2px;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["*{\n  box-sizing: border-box;\n}\nh1 {\n  font-size: 32px;\n  margin: 1rem 2rem;\n}\n\nh2 {\n  font-size: 22px;\n  margin: 1rem 0.1rem 0.5rem 0rem;\n}\n\n#explanation {\n  display: none;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin-left: 1em;\n  background: #F5F5F5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nmain{\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.left{\n  width: calc(50% - 250px);\n  padding: 1rem;\n}\n\n\n\n.chart-container{\n  width: 490px;\n  height: 500px;\n  border: 1px solid black;\n  padding: 25px 2px 5px 10px; \n  border-radius: 10px;\n  background-color: white;\n}\n\n\n.right{\n  width: calc(50% - 250px);\n  padding: 0rem 1rem;\n}\n\ninput[type=button] {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 100%;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 100%;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0;\n}\n\ninput[type=range] {\n  margin: 0 0 0 2rem;\n}\n\ninput[type=radio] {\n  margin: 0 0 0 2rem;\n}\n\nspan {\n  margin-left: 0px;\n}\n\n#eq {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap:2px;\n  font-size: 2rem;\n}\n\n\n #dep-var, #indep-var{\n  display: inline;\n  font-size: 2rem;\n}\n\n#exp{\n  position: relative;\n  top: -1.5rem;\n}\n\n\nul {\n  font-family: sans-serif;\n\n}\n\n.eq-label {\n  margin-left: 2rem;\n}\n\n\n.trendline-container-math {\n  font-size: 1.75rem;\n  border: 1px solid grey;\n  border-radius: 10px;\n  height: 3rem;\n  width: 80%;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n  padding-top: 6px;\n  text-align: center;\n  background-color: rgb(230, 230, 230);\n  font-family: 'Times New Roman', Times, serif;  \n}\n\n#trendline-equation-x-math{\n  font-style: italic;\n}\n\n#trendline-equation-y-math{\n  font-style: italic;\n}\n\n.trendline-container-physics {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.75rem;\n  border: 1px solid red;\n  border-radius: 10px;\n  height: 3rem;\n  width: 80%;\n  margin-left: 2rem;\n  padding-top: 6px;\n  text-align: center;\n  background-color: rgb(252, 252, 37);\n}\n\n\n.trendline {\n  display: inline-block;\n}\n\n\n.fraction {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle; \n  letter-spacing: 0.001em;\n  text-align: center;\n  font-size: 14px;\n  }\n\n.fraction > span { \n  display: block; \n  }\n.fraction span.fdn {border-top: thin solid black;}\n.fraction span.bar {display: none;}\n\n#coefficient {\n  width: 4rem;\n  height: 2rem;\n}\n\n#modal {\n  display: none;\n}\n \n#modal.visible {\n  position: fixed;\n  top: 0rem;\n  left: 0vh;\n  padding: 0.5rem 1rem;\n  background-color: white;\n  border: 1px black solid;\n  display: block;\n  z-index: 1;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  font-family:Arial, Helvetica, sans-serif\n}\n\n#modal-button {\n  width: 16rem;\n  position: absolute;\n  top: 1rem;\n  right:2rem;\n  background-color: rgb(200,200,200);\n}\n\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.trendline-container-fitted {\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: blue;\n  font-size: 1rem;\n  position: relative;\n    left: 9rem;\n    top: -9rem;\n}\n\n#trendline-equation-x-3, #trendline-equation-y-3, #trendline-equation-slope-3{\n  font-size: 1.5rem;\n  font-family: 'Times New Roman', Times, serif; \n}\n#trendline-equation-slope-3{\nmargin: 2px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map