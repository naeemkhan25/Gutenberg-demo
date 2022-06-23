/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/***/ (() => {

eval("var __ = wp.i18n.__;\nwp.blocks.registerBlockType('gutenberg-demo-blog/gutenberg-demo', {\n  title: __('gutenberg demo', 'gutenberg-demo'),\n  icon: 'smiley',\n  category: 'common',\n  attributes: {\n    skyColor: {\n      type: \"string\"\n    },\n    grayColor: {\n      type: \"string\"\n    }\n  },\n  edit: function edit(props) {\n    function updateSky(event) {\n      props.setAttributes({\n        skyColor: event.target.value\n      });\n    }\n\n    function updateGray(event) {\n      props.setAttributes({\n        grayColor: event.target.value\n      });\n    }\n\n    return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      placeholder: \"enter sky color\",\n      onChange: updateSky,\n      value: props.attributes.skyColor\n    }), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      placeholder: \"enter grass color\",\n      onChange: updateGray,\n      value: props.attributes.grayColor\n    }));\n  },\n  //  save : function( props) {\n  //     return (\n  //     <div><p>sky color is p mode {props.attributes.skyColor} and grass color is {props.attributes.grayColor} </p></div>\n  //     );\n  //  },\n  deprecated: [{\n    attributes: {\n      skyColor: {\n        type: \"string\"\n      },\n      grayColor: {\n        type: \"string\"\n      }\n    },\n    save: function save(props) {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h6\", null, \"sky color is \", props.attributes.skyColor, \" and grass color is \", props.attributes.grayColor, \" \"));\n    }\n  }, {\n    attributes: {\n      skyColor: {\n        type: \"string\"\n      },\n      grayColor: {\n        type: \"string\"\n      }\n    },\n    save: function save(props) {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"sky color is h1 mode \", props.attributes.skyColor, \" and grass color is \", props.attributes.grayColor, \" \"));\n    }\n  }]\n});\n\n//# sourceURL=webpack://webpack-dev/./src/block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/block.js"]();
/******/ 	
/******/ })()
;