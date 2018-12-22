(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar-listcar-module"],{

/***/ "./src/app/listcar/listcar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/listcar/listcar.module.ts ***!
  \*******************************************/
/*! exports provided: ListcarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcarPageModule", function() { return ListcarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _listcar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcar.page */ "./src/app/listcar/listcar.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _listcar_page__WEBPACK_IMPORTED_MODULE_5__["ListcarPage"]
    }
];
var ListcarPageModule = /** @class */ (function () {
    function ListcarPageModule() {
    }
    ListcarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_listcar_page__WEBPACK_IMPORTED_MODULE_5__["ListcarPage"]]
        })
    ], ListcarPageModule);
    return ListcarPageModule;
}());



/***/ }),

/***/ "./src/app/listcar/listcar.page.html":
/*!*******************************************!*\
  !*** ./src/app/listcar/listcar.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ผลการค้นหา</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row class=\"a\">\n            <ion-col><img src=\"assets/5.jpg\" alt=\"\"></ion-col>\n            <ion-col>\n                <p>Bugatti Chiron</p>\n                <p>2ที่นั่ง 2ประตู</p>\n                <p><ion-icon name=\"md-snow\"></ion-icon> แอร์คอนดิชั่น</p>\n                <p><ion-icon name=\"md-cog\"></ion-icon> อัตโนมัติ</p>\n                <p><ion-icon name=\"ios-navigate\"></ion-icon> Meet&Greet</p>\n                <p><ion-icon name=\"ios-car\"></ion-icon> ได้น้ำมันเต็มถังและกลับมาคืนเต็มถัง</p>\n                <ion-button color=\"primary\" (click)=\"detail()\">ดูรายละเอียดเพิ่มเติม</ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"a\">\n            <ion-col><img src=\"assets/1.jpg\" alt=\"\"></ion-col>\n            <ion-col>\n                <p>Honda city</p>\n                <p>4ที่นั่ง 4ประตู</p>\n                <p><ion-icon name=\"md-snow\"></ion-icon> แอร์คอนดิชั่น</p>\n                <p><ion-icon name=\"md-cog\"></ion-icon> อัตโนมัติ</p>\n                <p><ion-icon name=\"ios-navigate\"></ion-icon> Meet&Greet</p>\n                <p><ion-icon name=\"ios-car\"></ion-icon> ได้น้ำมันเต็มถังและกลับมาคืนเต็มถัง</p>\n                <ion-button color=\"primary\">ดูรายละเอียดเพิ่มเติม</ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"a\">\n            <ion-col><img src=\"assets/2.jpg\" alt=\"\"></ion-col>\n            <ion-col>\n                <p>Toyota Camry Hibrid</p>\n                <p>4ที่นั่ง 4ประตู</p>\n                <p><ion-icon name=\"md-snow\"></ion-icon> แอร์คอนดิชั่น</p>\n                <p><ion-icon name=\"md-cog\"></ion-icon> อัตโนมัติ</p>\n                <p><ion-icon name=\"ios-navigate\"></ion-icon> Meet&Greet</p>\n                <p><ion-icon name=\"ios-car\"></ion-icon> ได้น้ำมันเต็มถังและกลับมาคืนเต็มถัง</p>\n                <ion-button color=\"primary\">ดูรายละเอียดเพิ่มเติม</ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"a\">\n            <ion-col><img src=\"assets/3.jpg\" alt=\"\"></ion-col>\n            <ion-col>\n                <p>Ford Roptor</p>\n                <p>4ที่นั่ง 4ประตู</p>\n                <p><ion-icon name=\"md-snow\"></ion-icon> แอร์คอนดิชั่น</p>\n                <p><ion-icon name=\"md-cog\"></ion-icon> อัตโนมัติ</p>\n                <p><ion-icon name=\"ios-navigate\"></ion-icon> Meet&Greet</p>\n                <p><ion-icon name=\"ios-car\"></ion-icon> ได้น้ำมันเต็มถังและกลับมาคืนเต็มถัง</p>\n                <ion-button color=\"primary\">ดูรายละเอียดเพิ่มเติม</ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"a\">\n            <ion-col><img src=\"assets/4.jpg\" alt=\"\"></ion-col>\n            <ion-col>\n                <p>Toyota Fortuner</p>\n                <p>7ที่นั่ง 5ประตู</p>\n                <p><ion-icon name=\"md-snow\"></ion-icon> แอร์คอนดิชั่น</p>\n                <p><ion-icon name=\"md-cog\"></ion-icon> อัตโนมัติ</p>\n                <p><ion-icon name=\"ios-navigate\"></ion-icon> Meet&Greet</p>\n                <p><ion-icon name=\"ios-car\"></ion-icon> ได้น้ำมันเต็มถังและกลับมาคืนเต็มถัง</p>\n                <ion-button color=\"primary\">ดูรายละเอียดเพิ่มเติม</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listcar/listcar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/listcar/listcar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-toolbar {\n  --background: #3880ff;\n  color: #fff; }\n\n.a p {\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC9saXN0Y2FyL2xpc3RjYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsc0JBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBR0g7RUFFUSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9saXN0Y2FyL2xpc3RjYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIC5he1xuICAgICAgcHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/listcar/listcar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/listcar/listcar.page.ts ***!
  \*****************************************/
/*! exports provided: ListcarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcarPage", function() { return ListcarPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/car.service */ "./src/app/api/car.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListcarPage = /** @class */ (function () {
    function ListcarPage(car, navCont) {
        var _this = this;
        this.car = car;
        this.navCont = navCont;
        this.lists = [{ brand: "", image: "", position: "", price: "" }];
        this.car.getbooking({ start: 1545586100, end: 1545586400 }).subscribe(function (data) {
            _this.lists = data;
            console.log(_this.lists);
        });
    }
    ListcarPage.prototype.ngOnInit = function () {
    };
    ListcarPage.prototype.detail = function () {
        this.navCont.navigateBack(['/detail']);
    };
    ListcarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listcar',
            template: __webpack_require__(/*! ./listcar.page.html */ "./src/app/listcar/listcar.page.html"),
            styles: [__webpack_require__(/*! ./listcar.page.scss */ "./src/app/listcar/listcar.page.scss")],
        }),
        __metadata("design:paramtypes", [_api_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ListcarPage);
    return ListcarPage;
}());



/***/ })

}]);
//# sourceMappingURL=listcar-listcar-module.js.map