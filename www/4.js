(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/status-tap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/status-tap.js ***!
  \*******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(t,n){t.addEventListener("statusTap",function(){n.read(function(){var e=t.document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){n.write(function(){return o.scrollToTop(300)})})}})})}

/***/ })

}]);
//# sourceMappingURL=4.js.map