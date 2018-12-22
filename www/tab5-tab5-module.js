(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_5__["Tab5Page"]
    }
];
var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_5__["Tab5Page"]]
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());



/***/ }),

/***/ "./src/app/tab5/tab5.page.html":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  no-border>\n  <ion-toolbar>\n    <ion-title>\n      SWEN Ren a Car.Com\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n</ion-content>\n\n<ion-footer>\n    <h2>ติดต่อพนักงาน</h2>\n\n    <div class=\"container\">\n      <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\n      <p>มีรถให้เช่ามั้ยครับ</p>\n      <span class=\"time-right\">11:00</span>\n    </div>\n    \n    <div class=\"container darker\">\n      <img src=\"https://www.w3schools.com/w3images/avatar_g2.jpg\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\">\n      <p>สามารถค้นหาได้เลยค่ะ</p>\n      <span class=\"time-left\">11:01</span>\n    </div>\n    \n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-toolbar {\n  --background: #3880ff;\n  color: #fff; }\n\n.container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%; }\n\n.container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0; }\n\n.time-right {\n  float: right;\n  color: #aaa; }\n\n.time-left {\n  float: left;\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sc0JBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBS0g7RUFDRSwwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxZQUFXO0VBQ1gsZUFBYyxFQUNmOztBQUVEO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUNYLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi10b29sYmFye1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuXG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZGFya2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250YWluZXIgaW1nLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OjA7XG59XG5cbi50aW1lLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2FhYTtcbn1cblxuLnRpbWUtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzk5OTtcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab5Page = /** @class */ (function () {
    function Tab5Page(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    Tab5Page.prototype.ngOnInit = function () {
    };
    Tab5Page.prototype.login = function () {
        var _this = this;
        this.auth.signInWithEmailAndPassword({ email: this.email, password: this.password }).subscribe(function (data) {
            _this.route.navigate(['/tabs/tab4']);
        }, function (err) {
            console.log(err);
        });
    };
    Tab5Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab5',
            template: __webpack_require__(/*! ./tab5.page.html */ "./src/app/tab5/tab5.page.html"),
            styles: [__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")],
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Tab5Page);
    return Tab5Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map