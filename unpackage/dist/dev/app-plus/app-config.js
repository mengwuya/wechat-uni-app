"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************!*\
  !*** G:/uniapp-project/wechat-uni-app/pages.json ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

__registerConfig({"pages":["pages/tabbar/index/index","pages/tabbar/mail/mail","pages/tabbar/find/find","pages/tabbar/my/my"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿微信","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","titleNView":false,"scrollIndicator":"none"},"usingComponents":{},"tabBar":{"color":"#000000","selectedColor":"#08C261","borderStyle":"black","backgroundColor":"#F7F7F7","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-select.png","pagePath":"pages/tabbar/index/index","text":"首页"},{"iconPath":"static/tabbar/mail.png","selectedIconPath":"static/tabbar/mail-select.png","pagePath":"pages/tabbar/mail/mail","text":"通讯录"},{"iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find-select.png","pagePath":"pages/tabbar/find/find","text":"发现"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-select.png","pagePath":"pages/tabbar/my/my","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿微信","compilerVersion":"2.4.6","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000},"page":{"pages/tabbar/index/index":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/mail/mail":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/find/find":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/my/my":{"window":{"usingComponents":{}},"nvue":true}}});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vRzovdW5pYXBwLXByb2plY3Qvd2VjaGF0LXVuaS1hcHAvcGFnZXMuanNvbj8zNTcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7OztBQ2xGQSxrQkFBa0Isc0hBQXNILGlMQUFpTCxxQkFBcUIsV0FBVyx1R0FBdUcsMklBQTJJLEVBQUUsd0lBQXdJLEVBQUUsdUlBQXVJLEVBQUUsK0hBQStILEVBQUUsOERBQThELGdEQUFnRCx3R0FBd0csMEVBQTBFLFNBQVMsNEJBQTRCLFVBQVUscUJBQXFCLGFBQWEsMkJBQTJCLFVBQVUscUJBQXFCLGFBQWEsMkJBQTJCLFVBQVUscUJBQXFCLGFBQWEsdUJBQXVCLFVBQVUscUJBQXFCLGVBQWUsRSIsImZpbGUiOiJhcHAtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiX19yZWdpc3RlckNvbmZpZyh7XCJwYWdlc1wiOltcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiLFwicGFnZXMvdGFiYmFyL21haWwvbWFpbFwiLFwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiLFwicGFnZXMvdGFiYmFyL215L215XCJdLFwid2luZG93XCI6e1wibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwiYmxhY2tcIixcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS7v+W+ruS/oVwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI0Y4RjhGOFwiLFwiYmFja2dyb3VuZENvbG9yXCI6XCIjRjhGOEY4XCIsXCJ0aXRsZU5WaWV3XCI6ZmFsc2UsXCJzY3JvbGxJbmRpY2F0b3JcIjpcIm5vbmVcIn0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7fSxcInRhYkJhclwiOntcImNvbG9yXCI6XCIjMDAwMDAwXCIsXCJzZWxlY3RlZENvbG9yXCI6XCIjMDhDMjYxXCIsXCJib3JkZXJTdHlsZVwiOlwiYmxhY2tcIixcImJhY2tncm91bmRDb2xvclwiOlwiI0Y3RjdGN1wiLFwibGlzdFwiOlt7XCJpY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9pbmRleC5wbmdcIixcInNlbGVjdGVkSWNvblBhdGhcIjpcInN0YXRpYy90YWJiYXIvaW5kZXgtc2VsZWN0LnBuZ1wiLFwicGFnZVBhdGhcIjpcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiLFwidGV4dFwiOlwi6aaW6aG1XCJ9LHtcImljb25QYXRoXCI6XCJzdGF0aWMvdGFiYmFyL21haWwucG5nXCIsXCJzZWxlY3RlZEljb25QYXRoXCI6XCJzdGF0aWMvdGFiYmFyL21haWwtc2VsZWN0LnBuZ1wiLFwicGFnZVBhdGhcIjpcInBhZ2VzL3RhYmJhci9tYWlsL21haWxcIixcInRleHRcIjpcIumAmuiur+W9lVwifSx7XCJpY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9maW5kLnBuZ1wiLFwic2VsZWN0ZWRJY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9maW5kLXNlbGVjdC5wbmdcIixcInBhZ2VQYXRoXCI6XCJwYWdlcy90YWJiYXIvZmluZC9maW5kXCIsXCJ0ZXh0XCI6XCLlj5HnjrBcIn0se1wiaWNvblBhdGhcIjpcInN0YXRpYy90YWJiYXIvbXkucG5nXCIsXCJzZWxlY3RlZEljb25QYXRoXCI6XCJzdGF0aWMvdGFiYmFyL215LXNlbGVjdC5wbmdcIixcInBhZ2VQYXRoXCI6XCJwYWdlcy90YWJiYXIvbXkvbXlcIixcInRleHRcIjpcIuaIkeeahFwifV19LFwibnZ1ZUNvbXBpbGVyXCI6XCJ1bmktYXBwXCIsXCJyZW5kZXJlclwiOlwibmF0aXZlXCIsXCJzcGxhc2hzY3JlZW5cIjp7XCJhbHdheXNTaG93QmVmb3JlUmVuZGVyXCI6dHJ1ZSxcImF1dG9jbG9zZVwiOmZhbHNlfSxcImFwcG5hbWVcIjpcIuS7v+W+ruS/oVwiLFwiY29tcGlsZXJWZXJzaW9uXCI6XCIyLjQuNlwiLFwiZW50cnlQYWdlUGF0aFwiOlwicGFnZXMvdGFiYmFyL2luZGV4L2luZGV4XCIsXCJuZXR3b3JrVGltZW91dFwiOntcInJlcXVlc3RcIjo2MDAwLFwiY29ubmVjdFNvY2tldFwiOjYwMDAsXCJ1cGxvYWRGaWxlXCI6NjAwMCxcImRvd25sb2FkRmlsZVwiOjYwMDB9LFwicGFnZVwiOntcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiOntcIndpbmRvd1wiOntcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcIm52dWVcIjp0cnVlfSxcInBhZ2VzL3RhYmJhci9tYWlsL21haWxcIjp7XCJ3aW5kb3dcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJudnVlXCI6dHJ1ZX0sXCJwYWdlcy90YWJiYXIvZmluZC9maW5kXCI6e1wid2luZG93XCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwibnZ1ZVwiOnRydWV9LFwicGFnZXMvdGFiYmFyL215L215XCI6e1wid2luZG93XCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwibnZ1ZVwiOnRydWV9fX0pOyJdLCJzb3VyY2VSb290IjoiIn0=