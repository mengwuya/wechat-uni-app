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

__registerConfig({"pages":["pages/tabbar/index/index","pages/tabbar/mail/mail","pages/tabbar/find/find","pages/tabbar/my/my","pages/chat/chat/chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿微信","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","titleNView":false,"scrollIndicator":"none"},"usingComponents":{},"tabBar":{"color":"#000000","selectedColor":"#08C261","borderStyle":"black","backgroundColor":"#F7F7F7","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-select.png","pagePath":"pages/tabbar/index/index","text":"首页"},{"iconPath":"static/tabbar/mail.png","selectedIconPath":"static/tabbar/mail-select.png","pagePath":"pages/tabbar/mail/mail","text":"通讯录"},{"iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find-select.png","pagePath":"pages/tabbar/find/find","text":"发现"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-select.png","pagePath":"pages/tabbar/my/my","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿微信","compilerVersion":"2.4.6","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000},"page":{"pages/tabbar/index/index":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/mail/mail":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/find/find":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/my/my":{"window":{"usingComponents":{}},"nvue":true},"pages/chat/chat/chat":{"window":{"usingComponents":{}},"nvue":true}}});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vRzovdW5pYXBwLXByb2plY3Qvd2VjaGF0LXVuaS1hcHAvcGFnZXMuanNvbj8zNTcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7OztBQ2xGQSxrQkFBa0IsNklBQTZJLGlMQUFpTCxxQkFBcUIsV0FBVyx1R0FBdUcsMklBQTJJLEVBQUUsd0lBQXdJLEVBQUUsdUlBQXVJLEVBQUUsK0hBQStILEVBQUUsOERBQThELGdEQUFnRCx3R0FBd0csMEVBQTBFLFNBQVMsNEJBQTRCLFVBQVUscUJBQXFCLGFBQWEsMkJBQTJCLFVBQVUscUJBQXFCLGFBQWEsMkJBQTJCLFVBQVUscUJBQXFCLGFBQWEsdUJBQXVCLFVBQVUscUJBQXFCLGFBQWEseUJBQXlCLFVBQVUscUJBQXFCLGVBQWUsRSIsImZpbGUiOiJhcHAtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiX19yZWdpc3RlckNvbmZpZyh7XCJwYWdlc1wiOltcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiLFwicGFnZXMvdGFiYmFyL21haWwvbWFpbFwiLFwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiLFwicGFnZXMvdGFiYmFyL215L215XCIsXCJwYWdlcy9jaGF0L2NoYXQvY2hhdFwiXSxcIndpbmRvd1wiOntcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjpcImJsYWNrXCIsXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLku7/lvq7kv6FcIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNGOEY4RjhcIixcImJhY2tncm91bmRDb2xvclwiOlwiI0Y4RjhGOFwiLFwidGl0bGVOVmlld1wiOmZhbHNlLFwic2Nyb2xsSW5kaWNhdG9yXCI6XCJub25lXCJ9LFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ0YWJCYXJcIjp7XCJjb2xvclwiOlwiIzAwMDAwMFwiLFwic2VsZWN0ZWRDb2xvclwiOlwiIzA4QzI2MVwiLFwiYm9yZGVyU3R5bGVcIjpcImJsYWNrXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNGN0Y3RjdcIixcImxpc3RcIjpbe1wiaWNvblBhdGhcIjpcInN0YXRpYy90YWJiYXIvaW5kZXgucG5nXCIsXCJzZWxlY3RlZEljb25QYXRoXCI6XCJzdGF0aWMvdGFiYmFyL2luZGV4LXNlbGVjdC5wbmdcIixcInBhZ2VQYXRoXCI6XCJwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXhcIixcInRleHRcIjpcIummlumhtVwifSx7XCJpY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9tYWlsLnBuZ1wiLFwic2VsZWN0ZWRJY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9tYWlsLXNlbGVjdC5wbmdcIixcInBhZ2VQYXRoXCI6XCJwYWdlcy90YWJiYXIvbWFpbC9tYWlsXCIsXCJ0ZXh0XCI6XCLpgJrorq/lvZVcIn0se1wiaWNvblBhdGhcIjpcInN0YXRpYy90YWJiYXIvZmluZC5wbmdcIixcInNlbGVjdGVkSWNvblBhdGhcIjpcInN0YXRpYy90YWJiYXIvZmluZC1zZWxlY3QucG5nXCIsXCJwYWdlUGF0aFwiOlwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiLFwidGV4dFwiOlwi5Y+R546wXCJ9LHtcImljb25QYXRoXCI6XCJzdGF0aWMvdGFiYmFyL215LnBuZ1wiLFwic2VsZWN0ZWRJY29uUGF0aFwiOlwic3RhdGljL3RhYmJhci9teS1zZWxlY3QucG5nXCIsXCJwYWdlUGF0aFwiOlwicGFnZXMvdGFiYmFyL215L215XCIsXCJ0ZXh0XCI6XCLmiJHnmoRcIn1dfSxcIm52dWVDb21waWxlclwiOlwidW5pLWFwcFwiLFwicmVuZGVyZXJcIjpcIm5hdGl2ZVwiLFwic3BsYXNoc2NyZWVuXCI6e1wiYWx3YXlzU2hvd0JlZm9yZVJlbmRlclwiOnRydWUsXCJhdXRvY2xvc2VcIjpmYWxzZX0sXCJhcHBuYW1lXCI6XCLku7/lvq7kv6FcIixcImNvbXBpbGVyVmVyc2lvblwiOlwiMi40LjZcIixcImVudHJ5UGFnZVBhdGhcIjpcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiLFwibmV0d29ya1RpbWVvdXRcIjp7XCJyZXF1ZXN0XCI6NjAwMCxcImNvbm5lY3RTb2NrZXRcIjo2MDAwLFwidXBsb2FkRmlsZVwiOjYwMDAsXCJkb3dubG9hZEZpbGVcIjo2MDAwfSxcInBhZ2VcIjp7XCJwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXhcIjp7XCJ3aW5kb3dcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJudnVlXCI6dHJ1ZX0sXCJwYWdlcy90YWJiYXIvbWFpbC9tYWlsXCI6e1wid2luZG93XCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwibnZ1ZVwiOnRydWV9LFwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiOntcIndpbmRvd1wiOntcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcIm52dWVcIjp0cnVlfSxcInBhZ2VzL3RhYmJhci9teS9teVwiOntcIndpbmRvd1wiOntcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcIm52dWVcIjp0cnVlfSxcInBhZ2VzL2NoYXQvY2hhdC9jaGF0XCI6e1wid2luZG93XCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwibnZ1ZVwiOnRydWV9fX0pOyJdLCJzb3VyY2VSb290IjoiIn0=