(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ljphalmn.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ljphalmn.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_f0a3b336_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-f0a3b336.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f0a3b336.js");
/* harmony import */ var _chunk_647a6bad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-647a6bad.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-647a6bad.js");
var Backdrop=function(){function e(){this.lastClick=-1e4,this.blocker=_chunk_647a6bad_js__WEBPACK_IMPORTED_MODULE_1__["a"].createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return e.prototype.componentDidLoad=function(){this.stopPropagation&&this.blocker.block()},e.prototype.componentDidUnload=function(){this.blocker.destroy()},e.prototype.onTouchStart=function(e){this.lastClick=Object(_chunk_f0a3b336_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e),this.emitTap(e)},e.prototype.onMouseDown=function(e){this.lastClick<Object(_chunk_f0a3b336_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e)-2500&&this.emitTap(e)},e.prototype.emitTap=function(e){this.stopPropagation&&(e.preventDefault(),e.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},e.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(e,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"click",method:"onMouseDown",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-backdrop-md-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}.backdrop-hide.sc-ion-backdrop-md-h{background:transparent}.backdrop-no-tappable.sc-ion-backdrop-md-h{cursor:auto}.sc-ion-backdrop-md-h{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=95.js.map