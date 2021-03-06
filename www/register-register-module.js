(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border padding>\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n</ion-header>\n<ion-content fullscreen>\n  <!-- <ion-icon name=\"arrow-round-back\" class=\"back\" (click)=\"back()\"></ion-icon> -->\n  <div class=\"text-head\">ลงทะเบียนใช้งาน</div>\n  <div class=\"login-form\">\n      <input type=\"text\" class=\"login-input\" [(ngModel)]=\"email\" placeholder=\"อีเมล\">\n      <input type=\"password\" class=\"login-input\" [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\">\n      <button class=\"login-btn\" (click)=\"register()\">สมัครสมาชิก</button>\n  </div>  \n\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: url('bg.jpg') no-repeat 100%;\n  --background-size: 100% 100%; }\n\n:host ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.text-head {\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 15px;\n  color: #1C1C1C; }\n\n.login-form {\n  text-align: center; }\n\n.login-form p {\n    color: #ccc;\n    font-size: 14px; }\n\n.login-input {\n  padding: 5px;\n  height: 35px;\n  width: 200px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  box-shadow: 0px 0px 5px #cccccc;\n  margin: 5px;\n  outline-style: none; }\n\n.login-btn {\n  margin: 5px;\n  padding: 10px;\n  background-color: darkblue;\n  height: 40px;\n  width: 200px;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 20px;\n  outline-style: none; }\n\n.bg-im {\n  height: 100%;\n  background-image: url('bg1.jpg');\n  background-size: 100% 100%; }\n\n.back {\n  font-size: 30px;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSwyQ0FBYTtFQUNiLDZCQUFrQixFQUNuQjs7QUFKTDtFQU1RLDBCQUFhO0VBQ2IseUNBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBS3JCOztBQU5EO0lBR1EsWUFBVztJQUNYLGdCQUFlLEVBQ2xCOztBQUVMO0VBQ0ksYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsMkJBQTBCO0VBQzFCLGFBQVk7RUFDWixhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLG9CQUFtQixFQUN0Qjs7QUFNRDtFQUNJLGFBQVk7RUFDWixpQ0FBbUQ7RUFDbkQsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVMsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JnLmpwZycpIG5vLXJlcGVhdCAxMDAlO1xuICAgICAgLS1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4udGV4dC1oZWFke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMxQzFDMUM7XG59XG4ubG9naW4tZm9ybXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ubG9naW4taW5wdXR7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2NjY2NjYztcbiAgICBtYXJnaW46IDVweDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4ubG9naW4tYnRue1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4vLyAubG9naW4tYnRuOmhvdmVye1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuLy8gfVxuXG4uYmctaW17XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iZzEuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uYmFja3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCon, loadingController, auth, toastController) {
        this.navCon = navCon;
        this.loadingController = loadingController;
        this.auth = auth;
        this.toastController = toastController;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.back = function () {
        this.navCon.goBack();
    };
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'กำลังลงทะเบียน'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.auth.signUp({ email: this.email, password: this.password }).subscribe(function (user) {
                            if (user) {
                                loading.dismiss();
                                _this.navCon.goBack();
                            }
                            else {
                                _this.presentToast("can not register");
                            }
                        }, function (err) {
                            _this.presentToast(err.code);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map