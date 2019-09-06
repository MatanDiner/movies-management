(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n    <app-header></app-header>\n  </header>\n  <main>\n    <app-search></app-search>\n    <app-movies-list [movies]=\"movies\" *ngIf=\"movies\"></app-movies-list>\n  </main>\n</div>\n\n<div *ngIf=\"movie && !isCanceled\"></div>\n<app-modal *ngIf=\"movie && iconType==='info' && !isCanceled\">\n  <app-movie-info [movie]=\"movie\" (cancel)=\"onCancel($event)\"></app-movie-info>\n</app-modal>\n\n<app-modal *ngIf=\"movie && iconType==='delete' && !isCanceled\">\n  <app-movie-delete [movie]=\"movie\" (cancel)=\"onCancel($event)\"></app-movie-delete>\n</app-modal>\n\n<app-modal *ngIf=\"movie && iconType==='edit' && !isCanceled\">\n  <app-movie-edit [movie]=\"movie\" (cancel)=\"onCancel($event)\"></app-movie-edit>\n</app-modal>\n\n<app-modal *ngIf=\"iconType==='add' && !isCanceled\">\n  <app-movie-add (cancel)=\"onCancel($event)\"></app-movie-add>\n</app-modal>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/UI/backdrop/backdrop.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/UI/backdrop/backdrop.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"backdrop\" (click)=\"closeModal()\"></div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/UI/modal/modal.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/UI/modal/modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-backdrop></app-backdrop>\n    <div id=\"modal\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n    <div>\n        <label>Movies-Management</label>\n    </div>\n    <div>\n        <mat-icon class=\"add-icon\" (click)=\"onIconClicked()\">add_circle</mat-icon>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-add/movie-add.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-add/movie-add.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (submit)=\"onSubmit()\">\n    <div class=\"addForm\">\n        <input type=\"text\" placeholder=\"Title\" formControlName=\"Title\">\n        <div *ngIf=\"formGroup.controls['Title'].invalid && (formGroup.controls['Title'].dirty || formGroup.controls['Title'].touched)\">\n            <div *ngIf=\"formGroup.get('Title').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Title').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Year\" formControlName=\"Year\">\n        <div *ngIf=\"formGroup.controls['Year'].invalid && (formGroup.controls['Year'].dirty || formGroup.controls['Year'].touched)\">\n            <div *ngIf=\"formGroup.get('Year').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Year').errors?.maxlength\" class=\"alert\">\n                maximum 4 digits\n            </div>\n            <div *ngIf=\"formGroup.get('Year').errors?.isNumber\" class=\"alert\">\n                must be number\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Runtime(min)\" formControlName=\"Runtime\">\n        <div *ngIf=\"formGroup.controls['Runtime'].invalid && (formGroup.controls['Runtime'].dirty || formGroup.controls['Runtime'].touched)\">\n            <div *ngIf=\"formGroup.get('Runtime').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Runtime').errors?.maxlength\" class=\"alert\">\n                maximum 3 digits\n            </div>\n            <div *ngIf=\"formGroup.get('Runtime').errors?.isNumber\" class=\"alert\">\n                must be number\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Genre\" formControlName=\"Genre\">\n        <div *ngIf=\"formGroup.controls['Genre'].invalid && (formGroup.controls['Genre'].dirty || formGroup.controls['Genre'].touched)\">\n            <div *ngIf=\"formGroup.get('Genre').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Genre').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Director\" formControlName=\"Director\">\n        <div *ngIf=\"formGroup.controls['Director'].invalid && (formGroup.controls['Director'].dirty || formGroup.controls['Director'].touched)\">\n            <div *ngIf=\"formGroup.get('Director').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Director').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n    </div>\n    <div class=\"formBtn\">\n        <button class=\"cancelBtn\" (click)=\"onCancel()\">Cancel</button>\n        <button class=\"saveBtn\" [disabled]=\"!formGroup.valid\">Save</button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-delete/movie-delete.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-delete/movie-delete.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"delete\">\n<p class=\"delete-p\">\n    Are You sure that You want to delete this movie?\n</p>\n<div class=\"delete-btnDiv\">\n    <button class=\"cancelBtn\" (click)=\"onCancelClicked()\">Cancel</button>\n    <button class=\"saveBtn\" (click)=\"onDeleteClicked()\">Delete</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-edit/movie-edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-edit/movie-edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (submit)=\"onSubmit()\">\n    <div class=\"editForm\">\n        <input type=\"text\" placeholder=\"Title\" formControlName=\"Title\">\n        <div *ngIf=\"formGroup.invalid && (formGroup.dirty || formGroup.touched)\">\n            <div *ngIf=\"formGroup.get('Title').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Title').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Year\" formControlName=\"Year\">\n        <div *ngIf=\"formGroup.invalid && (formGroup.dirty || formGroup.touched)\">\n            <div *ngIf=\"formGroup.get('Year').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Year').errors?.maxlength\" class=\"alert\">\n                maximum 4 digits\n            </div>\n            <div *ngIf=\"formGroup.get('Year').errors?.isNumber\" class=\"alert\">\n                must be number\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Runtime(min)\" formControlName=\"Runtime\">\n        <div *ngIf=\"formGroup.invalid && (formGroup.dirty || formGroup.touched)\">\n            <div *ngIf=\"formGroup.get('Runtime').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Runtime').errors?.maxlength\" class=\"alert\">\n                maximum 3 digits\n            </div>\n            <div *ngIf=\"formGroup.get('Runtime').errors?.isNumber\" class=\"alert\">\n                must be number\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Genre\" formControlName=\"Genre\">\n        <div *ngIf=\"formGroup.invalid && (formGroup.dirty || formGroup.touched)\">\n            <div *ngIf=\"formGroup.get('Genre').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Genre').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n        <input type=\"text\" placeholder=\"Director\" formControlName=\"Director\">\n        <div *ngIf=\"formGroup.invalid && (formGroup.dirty || formGroup.touched)\">\n            <div *ngIf=\"formGroup.get('Director').errors?.required\" class=\"alert\">\n                must be not empty!\n            </div>\n            <div *ngIf=\"formGroup.get('Director').errors?.maxlength\" class=\"alert\">\n                maximum 30 digits\n            </div>\n        </div>\n    </div>\n    <div class=\"formBtn\">\n        <button class=\"cancelBtn\" (click)=\"onCancel()\">Cancel</button>\n        <button class=\"saveBtn\" [disabled]=\"!formGroup.valid\">Save</button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-info/movie-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-info/movie-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"info\">\n        <div class=\"info-detail\">\n            <div class=\"field\">Title:</div>\n            <div  class=\"field-value\">{{movie.Title | titlecase}}</div>\n        </div>\n        <div class=\"info-detail\">\n            <div  class=\"field\">Year:</div>\n            <div class=\"field-value\">{{movie.Year}}</div>\n        </div>\n        <div class=\"info-detail\">\n            <div  class=\"field\">Runtime(hr):</div>\n            <div class=\"field-value\">{{movie.Runtime | minuteSeconds}}</div>\n        </div>\n        <div class=\"info-detail\">\n            <div  class=\"field\">Genre:</div>\n            <div class=\"field-value\">{{movie.Genre | titlecase}}</div>\n        </div>\n        <div class=\"info-detail\">\n            <div  class=\"field\">Director:</div>\n            <div class=\"field-value\">{{movie.Director | titlecase}}</div>\n        </div>\n    </div>\n    <div class=\"okBtnDiv\">\n        <button class=\"okBtn\" (click)=\"onOkClicked()\">OK</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movies-list/movie/movie.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movies-list/movie/movie.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"movie\">\n    <img [src]=\"movie.img\" class=\"movie-img\" />\n    <div class=\"movie-dimWrap\">\n        <div class=\"movie-dimWrap-dimDiv\"></div>\n        <div class=\"movie-dimWrap-iconsDiv\">\n            <mat-icon class=\"icon-info\" (click)=\"onIconClicked('info')\">info</mat-icon>\n            <mat-icon class=\"icon-edit\" (click)=\"onIconClicked('edit')\">edit</mat-icon>\n            <mat-icon class=\"icon-delete\" (click)=\"onIconClicked('delete')\">delete</mat-icon>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movies-list/movies-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movies-list/movies-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movies\" id=\"movies\">\n\n    <div *ngFor=\"let movie of movies\">\n        <app-movie [movie]=\"movie\"></app-movie>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchDiv\">\n    <input type=\"text\" placeholder=\"Search...\" (keyup)=\"searchMovie($event)\" id=\"search\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n    margin-top: 120px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(moviesService) {
        this.moviesService = moviesService;
        this.title = 'movies-managment';
        this.isCanceled = true;
        this.movie = null;
        this.iconType = "";
        this.movies = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.moviesService.getMovies()];
                    case 1:
                        _a.movies = _b.sent();
                        this.subsMovies = this.moviesService.updateMoviesEvent.subscribe(function (movies) {
                            _this.movies = movies;
                        });
                        this.subsIconEventObj = this.moviesService.iconClickedEvent.subscribe(function (iconEventObj) {
                            _this.movie = iconEventObj.movie;
                            _this.iconType = iconEventObj.iconType;
                            _this.isCanceled = false;
                        });
                        this.subsCancel = this.moviesService.backDropClickedEvent.subscribe(function (cancel) {
                            _this.isCanceled = cancel;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.onCancel = function (cancel) {
        this.isCanceled = cancel;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subsMovies.unsubscribe();
        this.subsIconEventObj.unsubscribe();
        this.subsCancel.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movies-list/movies-list.component */ "./src/app/components/movies-list/movies-list.component.ts");
/* harmony import */ var _components_movies_list_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/movies-list/movie/movie.component */ "./src/app/components/movies-list/movie/movie.component.ts");
/* harmony import */ var _components_UI_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/UI/modal/modal.component */ "./src/app/components/UI/modal/modal.component.ts");
/* harmony import */ var _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie-info/movie-info.component */ "./src/app/components/movie-info/movie-info.component.ts");
/* harmony import */ var _components_movie_delete_movie_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-delete/movie-delete.component */ "./src/app/components/movie-delete/movie-delete.component.ts");
/* harmony import */ var _components_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movie-edit/movie-edit.component */ "./src/app/components/movie-edit/movie-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/movie-add/movie-add.component */ "./src/app/components/movie-add/movie-add.component.ts");
/* harmony import */ var _pipes_minSec_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/minSec.pipe */ "./src/app/pipes/minSec.pipe.ts");
/* harmony import */ var _components_UI_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/UI/backdrop/backdrop.component */ "./src/app/components/UI/backdrop/backdrop.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__["MoviesListComponent"],
                _components_movies_list_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
                _components_UI_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_10__["MovieInfoComponent"],
                _components_movie_delete_movie_delete_component__WEBPACK_IMPORTED_MODULE_11__["MovieDeleteComponent"],
                _components_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_12__["MovieEditComponent"],
                _components_movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_14__["MovieAddComponent"],
                _pipes_minSec_pipe__WEBPACK_IMPORTED_MODULE_15__["MinuteSecondsPipe"],
                _components_UI_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_16__["BackdropComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/UI/backdrop/backdrop.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/UI/backdrop/backdrop.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#backdrop{\r\n    background-color: black;\r\n    opacity: 0.75;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 100;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9VSS9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvVUkvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZHJvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/UI/backdrop/backdrop.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/UI/backdrop/backdrop.component.ts ***!
  \**************************************************************/
/*! exports provided: BackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropComponent", function() { return BackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



var BackdropComponent = /** @class */ (function () {
    function BackdropComponent(moviesService) {
        this.moviesService = moviesService;
    }
    BackdropComponent.prototype.ngOnInit = function () {
    };
    BackdropComponent.prototype.closeModal = function () {
        this.moviesService.backDropClickedEvent.next(true);
    };
    BackdropComponent.ctorParameters = function () { return [
        { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    BackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backdrop',
            template: __webpack_require__(/*! raw-loader!./backdrop.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/UI/backdrop/backdrop.component.html"),
            styles: [__webpack_require__(/*! ./backdrop.component.css */ "./src/app/components/UI/backdrop/backdrop.component.css")]
        })
    ], BackdropComponent);
    return BackdropComponent;
}());



/***/ }),

/***/ "./src/app/components/UI/modal/modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/UI/modal/modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#modal{\r\n    position: fixed;\r\n    z-index: 500;\r\n    background-color: #fff;\r\n    width: 70%;\r\n    height: 70%;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 1px 1px 1px #000;\r\n    padding: 16px;\r\n    left: 15%;\r\n    top: 15%;\r\n    box-sizing: border-box;\r\n    -webkit-transition: all .3s ease-out;\r\n    transition: all .3s ease-out;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media (min-width: 600px){\r\n    #modal{\r\n        width: 500px;\r\n        left: calc(50% - 250px);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9VSS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHVCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9VSS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vZGFse1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAjbW9kYWx7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/UI/modal/modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/UI/modal/modal.component.ts ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/UI/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/UI/modal/modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    width: 100%;\r\n    height: 100px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: burlywood;\r\n    color: brown;\r\n    font-size: 25px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    justify-content: space-around;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    z-index: 2;\r\n}\r\n\r\n\r\n.add-icon{\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.add-icon:hover{\r\n    color: purple;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGNvbG9yOiBicm93bjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbi5hZGQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC1pY29uOmhvdmVye1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(movieService) {
        this.movieService = movieService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onIconClicked = function () {
        this.movieService.iconClickedEvent.next({ movie: null, iconType: "add" });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-add/movie-add.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/movie-add/movie-add.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addForm{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 250px;\r\n}\r\n\r\n.formBtn{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n}\r\n\r\n.cancelBtn,.saveBtn{\r\n    box-sizing: border-box;\r\n    border-radius: 15px;\r\n    border-style: none;\r\n    padding: 5px;\r\n    color: brown;\r\n    width: 60px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cancelBtn{\r\n    color: brown;\r\n}\r\n\r\n.saveBtn{\r\n    color: green;\r\n}\r\n\r\n.cancelBtn:hover,.saveBtn:hover{\r\n    color: white;\r\n}\r\n\r\n.cancelBtn:hover{\r\nbackground-color: brown;\r\n}\r\n\r\n.saveBtn:hover{\r\nbackground-color: green;\r\n}\r\n\r\n.alert{\r\n    color: red;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1hZGQvbW92aWUtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWFkZC9tb3ZpZS1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uZm9ybUJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWxCdG4sLnNhdmVCdG57XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiBicm93bjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FuY2VsQnRue1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4uc2F2ZUJ0bntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmNhbmNlbEJ0bjpob3Zlciwuc2F2ZUJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhbmNlbEJ0bjpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuXHJcbi5zYXZlQnRuOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmFsZXJ0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/movie-add/movie-add.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/movie-add/movie-add.component.ts ***!
  \*************************************************************/
/*! exports provided: MovieAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAddComponent", function() { return MovieAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");




var MovieAddComponent = /** @class */ (function () {
    function MovieAddComponent(builder, moviesService) {
        this.moviesService = moviesService;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formGroup = builder.group({
            Title: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ],
            Year: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                    this.numberValidation
                ]
            ],
            Runtime: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                    this.numberValidation
                ]
            ],
            Director: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ],
            Genre: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ]
        });
    }
    MovieAddComponent.prototype.numberValidation = function (control) {
        if (control.value !== null && !isNaN(control.value)) {
            return null;
        }
        return { isNumber: true };
    };
    MovieAddComponent.prototype.onSubmit = function () {
        this.moviesService.addMovie(this.formGroup.controls);
        this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
        this.cancel.emit(true);
    };
    MovieAddComponent.prototype.onCancel = function () {
        this.cancel.emit(true);
    };
    MovieAddComponent.prototype.ngOnInit = function () {
    };
    MovieAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MovieAddComponent.prototype, "cancel", void 0);
    MovieAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-add',
            template: __webpack_require__(/*! raw-loader!./movie-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-add/movie-add.component.html"),
            styles: [__webpack_require__(/*! ./movie-add.component.css */ "./src/app/components/movie-add/movie-add.component.css")]
        })
    ], MovieAddComponent);
    return MovieAddComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-delete/movie-delete.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/movie-delete/movie-delete.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n\r\n}\r\n\r\n.delete-p{\r\n    text-align: center;\r\n}\r\n\r\n.delete-btnDiv{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.cancelBtn,.saveBtn{\r\n    background-color: lightgray;\r\n    border-style: none;\r\n    border-radius: 15px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cancelBtn{\r\n    color: brown;\r\n}\r\n\r\n.saveBtn{\r\n    color: green;\r\n}\r\n\r\n.cancelBtn:hover,.saveBtn:hover{\r\ncolor: white;\r\n}\r\n\r\n.cancelBtn:hover{\r\n    background-color: brown;\r\n}\r\n\r\n.saveBtn:hover{\r\n    background-color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZWxldGUvbW92aWUtZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZWxldGUvbW92aWUtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4uZGVsZXRlLXB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY2FuY2VsQnRuLC5zYXZlQnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbEJ0bntcclxuICAgIGNvbG9yOiBicm93bjtcclxufVxyXG4uc2F2ZUJ0bntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmNhbmNlbEJ0bjpob3Zlciwuc2F2ZUJ0bjpob3ZlcntcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FuY2VsQnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuLnNhdmVCdG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/movie-delete/movie-delete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-delete/movie-delete.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDeleteComponent", function() { return MovieDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");



var MovieDeleteComponent = /** @class */ (function () {
    function MovieDeleteComponent(moviesService) {
        this.moviesService = moviesService;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteMovieId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MovieDeleteComponent.prototype.ngOnInit = function () {
    };
    MovieDeleteComponent.prototype.onCancelClicked = function () {
        this.cancel.emit(true);
    };
    MovieDeleteComponent.prototype.onDeleteClicked = function () {
        this.moviesService.deleteMovie(this.movie.id);
        this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
        this.cancel.emit(true);
    };
    MovieDeleteComponent.ctorParameters = function () { return [
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MovieDeleteComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MovieDeleteComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MovieDeleteComponent.prototype, "deleteMovieId", void 0);
    MovieDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-delete',
            template: __webpack_require__(/*! raw-loader!./movie-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-delete/movie-delete.component.html"),
            styles: [__webpack_require__(/*! ./movie-delete.component.css */ "./src/app/components/movie-delete/movie-delete.component.css")]
        })
    ], MovieDeleteComponent);
    return MovieDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-edit/movie-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-edit/movie-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editForm{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 250px;\r\n}\r\n\r\n.formBtn{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n}\r\n\r\n.cancelBtn,.saveBtn{\r\n    box-sizing: border-box;\r\n    border-radius: 15px;\r\n    border-style: none;\r\n    padding: 5px;\r\n    color: brown;\r\n    width: 60px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cancelBtn{\r\n    color: brown;\r\n}\r\n\r\n.saveBtn{\r\n    color: green;\r\n}\r\n\r\n.cancelBtn:hover,.saveBtn:hover{\r\n    color: white;\r\n}\r\n\r\n.cancelBtn:hover{\r\nbackground-color: brown;\r\n}\r\n\r\n.saveBtn:hover{\r\nbackground-color: green;\r\n}\r\n\r\n.alert{\r\n    color: red;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1lZGl0L21vdmllLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZWRpdC9tb3ZpZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdEZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5mb3JtQnRue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmNhbmNlbEJ0biwuc2F2ZUJ0bntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW5jZWxCdG57XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn1cclxuXHJcbi5zYXZlQnRue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY2FuY2VsQnRuOmhvdmVyLC5zYXZlQnRuOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FuY2VsQnRuOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5cclxuLnNhdmVCdG46aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/movie-edit/movie-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-edit/movie-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");




var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(builder, moviesService) {
        this.moviesService = moviesService;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formGroup = builder.group({
            Title: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ],
            Year: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                    this.numberValidation
                ]
            ],
            Runtime: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                    this.numberValidation
                ]
            ],
            Director: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ],
            Genre: [
                "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ]
        });
    }
    MovieEditComponent.prototype.numberValidation = function (control) {
        if (control.value !== null && !isNaN(control.value)) {
            return null;
        }
        return { isNumber: true };
    };
    MovieEditComponent.prototype.ngOnInit = function () {
        for (var key in this.movie) {
            if (key !== "id" && key !== "img")
                this.formGroup.controls[key].setValue(this.movie[key]);
        }
    };
    MovieEditComponent.prototype.onSubmit = function () {
        this.moviesService.editMovie(this.movie.id, this.formGroup.controls);
        this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
        this.cancel.emit(true);
    };
    MovieEditComponent.prototype.onCancel = function () {
        this.cancel.emit(true);
    };
    MovieEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MovieEditComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MovieEditComponent.prototype, "cancel", void 0);
    MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit',
            template: __webpack_require__(/*! raw-loader!./movie-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-edit/movie-edit.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit.component.css */ "./src/app/components/movie-edit/movie-edit.component.css")]
        })
    ], MovieEditComponent);
    return MovieEditComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-info/movie-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-info/movie-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info{\r\ndisplay: grid;\r\ngrid-template-rows: 20% 20% 20% 20% 20% ;\r\nmargin-bottom: 20px;\r\ngrid-row-gap: 20px;\r\ntext-align: center;\r\n}\r\n\r\n.info-detail{\r\n    display: grid;\r\n    grid-template-columns: 30% 70%;\r\n    grid-column-gap: 10px;\r\n}\r\n\r\n.okBtnDiv{\r\n    margin-top: 100px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.okBtn{\r\n    box-sizing: border-box;\r\n    width: 59px;\r\n    border-radius: 15px;\r\n    border-style: none;\r\n    background-color: lightgray;\r\n    color: green;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n}\r\n\r\n.okBtn:hover{\r\n    background-color:green;\r\n    color: white;\r\n    \r\n}\r\n\r\n.field{\r\n    color: blue;\r\n}\r\n\r\n.field-value{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1pbmZvL21vdmllLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYix3Q0FBd0M7QUFDeEMsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWluZm8vbW92aWUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMjAlIDIwJSAyMCUgMjAlIDIwJSA7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmdyaWQtcm93LWdhcDogMjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1kZXRhaWx7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ub2tCdG5EaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9rQnRue1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA1OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm9rQnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uZmllbGR7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmZpZWxkLXZhbHVle1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/movie-info/movie-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-info/movie-info.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieInfoComponent", function() { return MovieInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieInfoComponent = /** @class */ (function () {
    function MovieInfoComponent() {
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MovieInfoComponent.prototype.ngOnInit = function () {
    };
    MovieInfoComponent.prototype.onOkClicked = function () {
        this.cancel.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MovieInfoComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MovieInfoComponent.prototype, "cancel", void 0);
    MovieInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-info',
            template: __webpack_require__(/*! raw-loader!./movie-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-info/movie-info.component.html"),
            styles: [__webpack_require__(/*! ./movie-info.component.css */ "./src/app/components/movie-info/movie-info.component.css")]
        })
    ], MovieInfoComponent);
    return MovieInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/movies-list/movie/movie.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/movies-list/movie/movie.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie{\r\n    margin-top: 10px;\r\n    position: relative;\r\n}\r\n\r\n.movie-img{\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 35px;\r\n}\r\n\r\n.movie-img:hover + .movie-dimWrap,.movie-dimWrap:hover{\r\ndisplay: block;\r\n}\r\n\r\n.movie-dimWrap{\r\n    display: none;\r\n    position: absolute;\r\n    bottom: 4px;\r\n    width: 300px;\r\n    height: 301px;\r\n\r\n}\r\n\r\n.movie-dimWrap-dimDiv{\r\n    width: 300px;\r\n    height: 301px;\r\n    border-radius: 35px;\r\n    opacity: 0.75;\r\n    background-color: white;\r\n}\r\n\r\n.movie-dimWrap-iconsDiv{\r\n    width: 300px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    position: relative;\r\n    bottom: 45px;\r\n    z-index: 1;\r\n}\r\n\r\n.icon-info,.icon-edit,.icon-delete{\r\n    font-size: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-info:hover{\r\n    color: blue;\r\n}\r\n\r\n.icon-edit:hover{\r\n    color: green;\r\n}\r\n\r\n.icon-delete:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmlle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vdmllLWltZ3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG4ubW92aWUtaW1nOmhvdmVyICsgLm1vdmllLWRpbVdyYXAsLm1vdmllLWRpbVdyYXA6aG92ZXJ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW92aWUtZGltV3JhcHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAxcHg7XHJcblxyXG59XHJcblxyXG5cclxuLm1vdmllLWRpbVdyYXAtZGltRGl2e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4ubW92aWUtZGltV3JhcC1pY29uc0RpdntcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pY29uLWluZm8sLmljb24tZWRpdCwuaWNvbi1kZWxldGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLWluZm86aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmljb24tZWRpdDpob3ZlcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb24tZGVsZXRlOmhvdmVye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/movies-list/movie/movie.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/movies-list/movie/movie.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/app/services/movies.service.ts");



var MovieComponent = /** @class */ (function () {
    function MovieComponent(moviesService) {
        this.moviesService = moviesService;
        this.movie = null;
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent.prototype.onIconClicked = function (iconType) {
        var movie = this.movie;
        this.moviesService.iconClickedEvent.next({ movie: movie, iconType: iconType });
    };
    MovieComponent.ctorParameters = function () { return [
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MovieComponent.prototype, "movie", void 0);
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movies-list/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movies-list/movie/movie.component.css")]
        })
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/movies-list/movies-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/movies-list/movies-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#movies{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    margin-top: 20px;\r\n}\r\n\r\n.deletedMovie{\r\n    display: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vdmllc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5kZWxldGVkTW92aWV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movies-list/movies-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/movies-list/movies-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");



var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService) {
        this.moviesService = moviesService;
        this.movies = null;
        // this.deletedMovies = [];
    }
    MoviesListComponent.prototype.ngOnInit = function () {
    };
    MoviesListComponent.ctorParameters = function () { return [
        { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MoviesListComponent.prototype, "movies", void 0);
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! raw-loader!./movies-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/components/movies-list/movies-list.component.css")]
        })
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchDiv{\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n-webkit-box-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n#search{\r\n    border-radius: 15px;\r\n    padding-left: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxvQkFBYTtBQUFiLGFBQWE7QUFDYix3QkFBdUI7UUFBdkIsdUJBQXVCO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaERpdntcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(movieService) {
        this.movieService = movieService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchMovie = function (e) {
        var movies = this.movieService.getMoviesBySearchValue(e.target.value);
        this.movieService.updateMoviesEvent.next(movies);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/minSec.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/minSec.pipe.ts ***!
  \**************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MinuteSecondsPipe = /** @class */ (function () {
    function MinuteSecondsPipe() {
    }
    MinuteSecondsPipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' + (value - minutes * 60).toString().padStart(2, '0');
    };
    MinuteSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'minuteSeconds'
        })
    ], MinuteSecondsPipe);
    return MinuteSecondsPipe;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MoviesService = /** @class */ (function () {
    function MoviesService() {
        this.iconClickedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateMoviesEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.backDropClickedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movies = [];
        this.dbUrl = "https://movies-management.firebaseio.com/movies.json";
        this.id = 21;
    }
    MoviesService.prototype.getMovies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.dbUrl)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.movies = data;
                        return [2 /*return*/, this.movies];
                }
            });
        });
    };
    MoviesService.prototype.deleteMovie = function (mId) {
        this.movies = this.movies.filter(function (m) { return m.id !== mId; });
    };
    MoviesService.prototype.editMovie = function (mId, updatedMovie) {
        var index = this.movies.findIndex(function (m) { return m.id === mId; });
        var movie = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.movies[index]);
        for (var key in updatedMovie) {
            movie[key] = updatedMovie[key].value;
        }
        this.movies.splice(index, 1, movie);
    };
    MoviesService.prototype.addMovie = function (movie) {
        var id = this.id.toString();
        this.id++;
        var newMovie = {
            id: id,
            img: 'assets/images/noImg.jpg',
            Title: "",
            Genre: "",
            Year: 0,
            Director: "",
            Runtime: 0,
        };
        for (var key in movie) {
            newMovie[key] = movie[key].value;
        }
        this.movies.push(newMovie);
    };
    MoviesService.prototype.getMoviesBySearchValue = function (value) {
        var movies = this.movies.filter(function (m) { return m.Title.toLowerCase().includes(value.toLowerCase()); });
        return movies;
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\matan\movies-managment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map