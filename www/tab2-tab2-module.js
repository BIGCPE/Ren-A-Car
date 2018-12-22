(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
        this.date1 = {
            day_n: "12",
            day: "อา.",
            month: 'สิงหาคม',
            time: '10:00'
        };
        this.date2 = {
            day_n: "12",
            day: "อา.",
            month: 'สิงหาคม',
            time: '10:00'
        };
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  no-border>\n  <ion-toolbar>\n    <ion-title>\n      ข้อมูลการจอง\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card (click)=\"detail()\">\n    <ion-card-header>\n    </ion-card-header>\n\n    <ion-card-content>\n        <ion-row class=\"xxu\">\n          <ion-col>\n              <img class=\"item-img\" src=\"https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <ion-col>\n                <h1>15</h1>\n                <p>อา. | สิงหาคม</p>\n              </ion-col>\n              <ion-col>\n                <h1>17</h1>\n                <p>ส. | สิงหาคม</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p>สมาบินเชียงใหม่</p>\n                    <h1 class=\"price\">THB 20000</h1>\n                </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-toolbar {\n  --background: #3880ff;\n  color: #fff; }\n\n.xxu {\n  text-align: center; }\n\n.xxu img {\n    width: 100%; }\n\n.xxu .text-center {\n    text-align: center; }\n\n.xxu .price {\n    color: #3880ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsc0JBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBRUg7RUFDRSxtQkFBa0IsRUFVbkI7O0FBWEQ7SUFHSSxZQUFXLEVBQ1o7O0FBSkg7SUFNSSxtQkFBa0IsRUFDbkI7O0FBUEg7SUFTSSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbjpob3N0IHtcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLnh4dXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnByaWNle1xuICAgICAgY29sb3I6ICMzODgwZmY7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCont) {
        this.navCont = navCont;
    }
    Tab2Page.prototype.detail = function () {
        this.navCont.navigateBack(['/detail']);
    };
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map