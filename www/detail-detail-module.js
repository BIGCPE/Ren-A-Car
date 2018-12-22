(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_5__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_5__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.html":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>รายละเอียดรถ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <p>Bugatti Chiron</p>\n    <ion-col><img src=\"assets/5.jpg\" alt=\"\"></ion-col>\n    <ion-list>\n        <ion-item>\n          <ion-label>\n            <p>รายละเอียดของรถ</p>\n            <p>- 2ที่นั่ง</p>\n            <p>- 2ประตู</p>\n            <p>- แอร์คอนดิชั่น</p>\n            <p>- อัตโนมัติ/Paddle shift</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p>รวมอยู่ในค่าเช่า</p>\n            <p>- แก้ไขการจองฟรี</p>\n            <p>- ประกันผ่อนผันค่าเสียหาย</p>\n            <p>- ประกันการโจรกรรม</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p>ข้อมูลผู้จัดจำหน่าย</p>\n            <p> เงื่อนไขเรื่องของน้ำมัน: ได้น้ำมันเต็มถังตอนรับรถและการมาคืนเต็มถัง</p>\n            <p> รถเช้าได้เต็มน้ำมันเต็มถังเรียนร้อย</p>\n          </ion-label>\n        </ion-item>\n    </ion-list>\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a p {\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailPage = /** @class */ (function () {
    function DetailPage() {
    }
    DetailPage.prototype.ngOnInit = function () {
    };
    DetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.page.html */ "./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map