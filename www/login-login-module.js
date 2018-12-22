(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"text-head\">ยินดีต้อนรับลงทะเบียนเข้าใช้งานได้เลย</div>\n  <div class=\"login-form\">\n      <input type=\"text\" class=\"login-input\" [(ngModel)]=\"email\" placeholder=\"อีเมล\">\n      <input type=\"password\" class=\"login-input\" [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\">\n      <button class=\"login-btn\" (click)=\"loing()\">เข้าสู่ระบบ</button>\n      <p>หรือ</p>\n      <p>ยังไม่ได้เป็นสมาชิก <a (click)=\"register()\">ลงทะเบียน</a></p>\n  </div>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: url('bg1.jpg') no-repeat 100%;\n  --background-size: 100% 100%; }\n\n:host ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.text-head {\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 15px;\n  color: #1C1C1C; }\n\n.login-form {\n  text-align: center; }\n\n.login-form p {\n    color: #ccc;\n    font-size: 14px; }\n\n.login-input {\n  padding: 5px;\n  height: 35px;\n  width: 200px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  box-shadow: 0px 0px 5px #cccccc;\n  margin: 5px;\n  outline-style: none; }\n\n.login-btn {\n  margin: 5px;\n  padding: 10px;\n  background-color: darkblue;\n  height: 40px;\n  width: 200px;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 20px;\n  outline-style: none; }\n\n.bg-im {\n  height: 100%;\n  background-image: url('bg.jpg');\n  background-size: 100% 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vY2UvRGVza3RvcC9rdW5rdW4vbXlBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSw0Q0FBYTtFQUNiLDZCQUFrQixFQUNuQjs7QUFKTDtFQU1RLDBCQUFhO0VBQ2IseUNBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBS3JCOztBQU5EO0lBR1EsWUFBVztJQUNYLGdCQUFlLEVBQ2xCOztBQUVMO0VBQ0ksYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsMkJBQTBCO0VBQzFCLGFBQVk7RUFDWixhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGFBQVk7RUFDWixnQ0FBNEM7RUFDNUMsMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2UvYmcxLmpwZycpIG5vLXJlcGVhdCAxMDAlO1xuICAgICAgLS1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4udGV4dC1oZWFke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMxQzFDMUM7XG59XG4ubG9naW4tZm9ybXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ubG9naW4taW5wdXR7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2NjY2NjYztcbiAgICBtYXJnaW46IDVweDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4ubG9naW4tYnRue1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4uYmctaW17XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var LoginPage = /** @class */ (function () {
    function LoginPage(navCon, auth, router, loadingController, toastController) {
        this.navCon = navCon;
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.loing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'กำลังเข้าสู่ระบบ'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.auth.signInWithEmailAndPassword({ email: this.email, password: this.password }).subscribe(function (user) {
                            if (user) {
                                loading.dismiss();
                                _this.navCon.navigateRoot('/');
                            }
                            else {
                                loading.dismiss();
                                _this.presentToast("can not register");
                            }
                        }, function (err) {
                            loading.dismiss();
                            _this.presentToast(err.code);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (text) {
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
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map