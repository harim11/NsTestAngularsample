webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/Books/book.module": [
		"../../../../../src/app/Books/book.module.ts"
	],
	"app/auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts"
	],
	"app/editor/editor.module": [
		"../../../../../src/app/editor/editor.module.ts"
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts"
	],
	"app/profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts"
	],
	"app/settings/settings.module": [
		"../../../../../src/app/settings/settings.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/Books/book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ns_test_crud_books_component__ = __webpack_require__("../../../../../src/app/Books/ns-test-crud-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_router__ = __webpack_require__("../../../../../src/app/Books/book.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3__book_router__["a" /* bookRouter */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__ns_test_crud_books_component__["a" /* NsTestCrudBooksComponent */]
        ]
    })
], BookModule);

//# sourceMappingURL=book.module.js.map

/***/ }),

/***/ "../../../../../src/app/Books/book.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Books_ns_test_crud_books_component__ = __webpack_require__("../../../../../src/app/Books/ns-test-crud-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");



var BOOK_ROUTER = [
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_1_app_Books_ns_test_crud_books_component__["a" /* NsTestCrudBooksComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["NsTestAuthGuard"]]
    },
    {
        path: 'books/:slug',
        component: __WEBPACK_IMPORTED_MODULE_1_app_Books_ns_test_crud_books_component__["a" /* NsTestCrudBooksComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["NsTestAuthGuard"]]
    }
];
var bookRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(BOOK_ROUTER);
//# sourceMappingURL=book.router.js.map

/***/ }),

/***/ "../../../../../src/app/Books/ns-test-crud-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Books/ns-test-crud-books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Books-Crud\">\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <h1>Books List</h1>\n    <table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Price</th>\n        <th class=\"text-center\">Name</th>\n        <th class=\"text-center\">Author</th>\n        <th class=\"text-center\">Review</th>\n        <th class=\"text-center\">&nbsp;</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\">\n        <td>{{ book.Price }}</td>\n        <td>{{ book.name }}</td>\n        <td>{{ book.author }}</td>\n        <td>{{ book.review }}</td>\n        \n        <td>\n          <button class=\"btn btn-info\"\n                        (click)=\"showEditBookForm(book)\">\n                       <i class=\"fa fa-edit\">Edit</i>\n              </button>\n          <button class=\"btn btn-danger\"\n                       (click)=\"removeBook(book)\">\n                       <i class=\"fa fa-minus\">Delete</i>\n            </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <button class=\"btn btn-success\"\n               (click)=\"showAddBookForm()\"><i class=\"fa fa-plus\">Add</i></button>\n  <br />\n  <br />\n\n  <form *ngIf=\"booksForm\">\n    <h2>Add New Book</h2>\n    <p>Price: <input type=\"text\"\n                           name=\"Price\"\n                           [(ngModel)]=\"newBook.Price\" /></p>\n    <p>Name: <input type=\"text\" name=\"name\"\n                                 [(ngModel)]=\"newBook.name\" /></p>\n \n       <p>Author: <input type=\"text\" name=\"author\"\n                              [(ngModel)]=\"newBook.author\" /></p>\n         <p>Review: <select name=\"review\" [(ngModel)]=\"newBook.review\">\n          <option value=\"Good\">Good</option>\n          <option value=\"Bad\">Bad</option>\n          <option value=\"Ok\">Ok</option>\n          <option value=\"VeryGood\">VeryGood</option>\n        </select></p>\n    <p>\n      <button type=\"button\"\n                   class=\"btn btn-primary\"\n                   (click)=\"saveBook(newBook)\">Submit</button>\n      <button type=\"button\"\n                   class=\"btn btn-warning\"\n                   (click)=\"cancelNewBook()\">Cancel</button>\n    </p>\n   </form>\n\n    <form *ngIf=\"editbooksForm\">\n    <h2>Edit Book Details</h2>\n    <p>Price: <input type=\"text\"\n                           name=\"Price\"\n                           [(ngModel)]=\"editedbooks.Price\" /></p>\n    <p>Name: <input type=\"text\"\n                                 name=\"name\"\n                                 [(ngModel)]=\"editedbooks.name\" /></p>\n    <p>Author: <input type=\"text\"\n                                 name=\"author\"\n                                 [(ngModel)]=\"editedbooks.author\" /></p>\n  <p>Review: <select name=\"review\" [(ngModel)]=\"editedbooks.review\">\n                                  <option value=\"Good\">Good</option>\n                                  <option value=\"Bad\">Bad</option>\n                                  <option value=\"Ok\">Ok</option>\n                                  <option value=\"VeryGood\">VeryGood</option>\n           </select></p>                            \n    <p>\n      <button type=\"button\"\n                   class=\"btn btn-primary\"\n                   (click)=\"updateBook(editedbooks)\">Submit</button>\n      <button type=\"button\"\n                   class=\"btn btn-warning\"\n                   (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n\n   </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Books/ns-test-crud-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestCrudBooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestCrudBooksComponent = (function () {
    function NsTestCrudBooksComponent(BookCrudService) {
        this.BookCrudService = BookCrudService;
        this.booksForm = false;
        this.newBook = {};
        this.getindex = -1;
        this.editbooksForm = false;
        this.editedbooks = {};
        this.getBooksList = function () {
            this.books = this.BookCrudService.getBooksFromData();
        };
        this.saveBook = function (book) {
            if (this.isNewBook) {
                //add a new user
                this.BookCrudService.addBook(book);
            }
            this.booksForm = false;
        };
    }
    NsTestCrudBooksComponent.prototype.ngOnInit = function () {
        this.getBooksList();
    };
    NsTestCrudBooksComponent.prototype.showEditBookForm = function (Book) {
        if (!Book) {
            this.booksForm = false;
            return;
        }
        this.editbooksForm = true;
        this.editedbooks = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["clone"])(Book);
        this.getindex = this.books.indexOf(Book);
    };
    NsTestCrudBooksComponent.prototype.showAddBookForm = function () {
        // resets form if edited user
        if (this.books.length) {
            this.newBook = {};
        }
        this.booksForm = true;
        this.isNewBook = true;
    };
    NsTestCrudBooksComponent.prototype.updateBook = function (book) {
        this.BookCrudService.updateBook(this.editedbooks, this.getindex);
        this.editbooksForm = false;
        this.editedbooks = {};
    };
    NsTestCrudBooksComponent.prototype.removeBook = function (book) {
        this.BookCrudService.deleteBook(book);
    };
    NsTestCrudBooksComponent.prototype.cancelEdits = function () {
        this.editedbooks = {};
        this.editbooksForm = false;
    };
    NsTestCrudBooksComponent.prototype.cancelNewBook = function () {
        this.newBook = {};
        this.booksForm = false;
    };
    return NsTestCrudBooksComponent;
}());
NsTestCrudBooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'Books-Crud',
        template: __webpack_require__("../../../../../src/app/Books/ns-test-crud-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Books/ns-test-crud-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestCRUDbooksService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestCRUDbooksService"]) === "function" && _a || Object])
], NsTestCrudBooksComponent);

var _a;
//# sourceMappingURL=ns-test-crud-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\n\n<router-outlet></router-outlet>\n\n<layout-footer></layout-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestUserService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article_module__ = __webpack_require__("../../../../../src/app/article/article.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_editor_module__ = __webpack_require__("../../../../../src/app/editor/editor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_module__ = __webpack_require__("../../../../../src/app/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Books_book_module__ = __webpack_require__("../../../../../src/app/Books/book.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestFooterComponent"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestHeaderComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_router__["a" /* appRouter */],
            __WEBPACK_IMPORTED_MODULE_4__article_article_module__["a" /* ArticleModule */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__["AuthModule"],
            __WEBPACK_IMPORTED_MODULE_6__editor_editor_module__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_7__home_home_module__["HomeModule"],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_module__["ProfileModule"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_9__settings_settings_module__["SettingsModule"],
            __WEBPACK_IMPORTED_MODULE_10__Books_book_module__["BookModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__shared__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestArticlesService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestAuthGuard"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestCommentsService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestJwtService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestProfilesService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestTagsService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestUserService"],
            __WEBPACK_IMPORTED_MODULE_11__shared__["NsTestCRUDbooksService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var router = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'register',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/editor/editor.module#EditorModule'
    },
    {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/settings/settings.module#SettingsModule'
    },
    {
        path: 'books',
        loadChildren: 'app/Books/book.module#BookModule'
    }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/article/NsTest-article-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\">\n      {{ comment.body }}\n    </p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n      <img [src]=\"comment.author.image\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n      {{ comment.author.username }}\n    </a>\n    <span class=\"date-posted\">\n      {{ comment.createdAt | date: 'longDate' }}\n    </span>\n    <span class=\"mod-options\" [hidden]=\"!canModify\">\n      <i class=\"ion-trash-a\" (click)=\"deleteClicked()\"></i>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/NsTest-article-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NSTestArticleCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NSTestArticleCommentComponent = (function () {
    function NSTestArticleCommentComponent(userService) {
        this.userService = userService;
        this.deleteComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NSTestArticleCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
    };
    NSTestArticleCommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    return NSTestArticleCommentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["Comment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["Comment"]) === "function" && _a || Object)
], NSTestArticleCommentComponent.prototype, "comment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NSTestArticleCommentComponent.prototype, "deleteComment", void 0);
NSTestArticleCommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'article-comment',
        template: __webpack_require__("../../../../../src/app/article/NsTest-article-comment.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["NsTestUserService"]) === "function" && _b || Object])
], NSTestArticleCommentComponent);

var _a, _b;
//# sourceMappingURL=NsTest-article-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/NsTest-article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleResolver = (function () {
    function ArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return ArticleResolver;
}());
ArticleResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestArticlesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestArticlesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _c || Object])
], ArticleResolver);

var _a, _b, _c;
//# sourceMappingURL=NsTest-article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/NsTest-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-page\">\n\n  <div class=\"banner\">\n    <div class=\"container\">\n      <h1>{{ article.title | titleCase }}</h1>\n      \n      <article-meta [article]=\"article\">\n\n          <span [hidden]=\"!canModify\">\n          <a class=\"btn btn-sm btn-outline-secondary\"\n             [routerLink]=\"['/editor', article.slug]\">\n            <i class=\"ion-edit\"></i> Edit Article\n          </a>\n\n          <button class=\"btn btn-sm btn-outline-danger\"\n            [ngClass]=\"{disabled: isDeleting}\"\n            (click)=\"deleteArticle()\">\n            <i class=\"ion-trash-a\"></i> Delete Article\n          </button>\n        </span>\n\n        <span [hidden]=\"canModify\">\n          <follow-button\n            [profile]=\"article.author\"\n            (onToggle)=\"onToggleFollowing($event)\">\n          </follow-button>\n\n          <favorite-button\n            [article]=\"article\"\n            (onToggle)=\"onToggleFavorite($event)\">\n            {{ article.favorited ? 'Unfavorite' : 'Favorite' }} Article <span class=\"counter\">({{ article.favoritesCount }})</span>\n          </favorite-button>\n        </span>\n\n      </article-meta>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n\n    <div class=\"row article-content\">\n      <div class=\"col-md-12\">\n\n        <div [innerHTML]=\"article.body | markdown\"></div>\n\n        <ul class=\"tag-list\">\n          <li *ngFor=\"let tag of article.tagList\"\n            class=\"tag-default tag-pill tag-outline\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n      <article-meta [article]=\"article\">\n\n          <span [hidden]=\"!canModify\">\n          <a class=\"btn btn-sm btn-outline-secondary\"\n             [routerLink]=\"['/editor', article.slug]\">\n            <i class=\"ion-edit\"></i> Edit Article\n          </a>\n\n          <button class=\"btn btn-sm btn-outline-danger\"\n            [ngClass]=\"{disabled: isDeleting}\"\n            (click)=\"deleteArticle()\">\n            <i class=\"ion-trash-a\"></i> Delete Article\n          </button>\n        </span>\n\n        <span [hidden]=\"canModify\">\n          <follow-button\n            [profile]=\"article.author\"\n            (onToggle)=\"onToggleFollowing($event)\">\n          </follow-button>\n\n          <favorite-button\n            [article]=\"article\"\n            (onToggle)=\"onToggleFavorite($event)\">\n            {{ article.favorited ? 'Unfavorite' : 'Favorite' }} Article <span class=\"counter\">({{ article.favoritesCount }})</span>\n          </favorite-button>\n        </span>\n\n      </article-meta>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div *showAuthed=\"true\">\n          <list-errors [errors]=\"commentFormErrors\"></list-errors>\n          <form class=\"card comment-form\" (ngSubmit)=\"addComment()\">\n            <fieldset [disabled]=\"isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  [formControl]=\"commentControl\"\n                ></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <img [src]=\"currentUser.image\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div *showAuthed=\"false\">\n          <a [routerLink]=\"['/login']\">Sign in</a> or <a [routerLink]=\"['/register']\">sign up</a> to add comments on this article.\n        </div>\n\n        <article-comment\n          *ngFor=\"let comment of comments\"\n          [comment]=\"comment\"\n          (deleteComment)=\"onDeleteComment(comment)\">\n        </article-comment>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/NsTest-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestArticleComponent = (function () {
    function NsTestArticleComponent(route, articlesService, commentsService, router, userService) {
        this.route = route;
        this.articlesService = articlesService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    NsTestArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched article
        this.route.data.subscribe(function (data) {
            _this.article = data.article;
            // Load the comments on this article
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.article.author.username);
        });
    };
    NsTestArticleComponent.prototype.onToggleFavorite = function (favorited) {
        this.article.favorited = favorited;
        if (favorited) {
            this.article.favoritesCount++;
        }
        else {
            this.article.favoritesCount--;
        }
    };
    NsTestArticleComponent.prototype.onToggleFollowing = function (following) {
        this.article.author.following = following;
    };
    NsTestArticleComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.isDeleting = true;
        this.articlesService.destroy(this.article.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    NsTestArticleComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.article.slug)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    NsTestArticleComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.article.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    NsTestArticleComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.article.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    return NsTestArticleComponent;
}());
NsTestArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'article-page',
        template: __webpack_require__("../../../../../src/app/article/NsTest-article.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestArticlesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestArticlesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestCommentsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestCommentsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"]) === "function" && _e || Object])
], NsTestArticleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=NsTest-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/TitleCase.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input) {
        if (!input) {
            return '';
        }
        else {
            return input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        }
    };
    return TitleCasePipe;
}());
TitleCasePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'titleCase' })
], TitleCasePipe);

//# sourceMappingURL=TitleCase.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_article_component__ = __webpack_require__("../../../../../src/app/article/NsTest-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_article_comment_component__ = __webpack_require__("../../../../../src/app/article/NsTest-article-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_article_resolver_service__ = __webpack_require__("../../../../../src/app/article/NsTest-article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__markdown_pipe__ = __webpack_require__("../../../../../src/app/article/markdown.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__article_router__ = __webpack_require__("../../../../../src/app/article/article.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TitleCase_pipe__ = __webpack_require__("../../../../../src/app/article/TitleCase.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ArticleModule = (function () {
    function ArticleModule() {
    }
    return ArticleModule;
}());
ArticleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__article_router__["a" /* ArticleRouter */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["SharedModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__NsTest_article_component__["a" /* NsTestArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_2__NsTest_article_comment_component__["a" /* NSTestArticleCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__markdown_pipe__["a" /* MarkdownPipe */],
            __WEBPACK_IMPORTED_MODULE_7__TitleCase_pipe__["a" /* TitleCasePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__NsTest_article_resolver_service__["a" /* ArticleResolver */]
        ]
    })
], ArticleModule);

//# sourceMappingURL=article.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_article_component__ = __webpack_require__("../../../../../src/app/article/NsTest-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_article_resolver_service__ = __webpack_require__("../../../../../src/app/article/NsTest-article-resolver.service.ts");



var ARTICLE_ROUTER = [
    {
        path: 'article/:slug',
        component: __WEBPACK_IMPORTED_MODULE_1__NsTest_article_component__["a" /* NsTestArticleComponent */],
        resolve: {
            article: __WEBPACK_IMPORTED_MODULE_2__NsTest_article_resolver_service__["a" /* ArticleResolver */]
        }
    }
];
var ArticleRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(ARTICLE_ROUTER);
//# sourceMappingURL=article.router.js.map

/***/ }),

/***/ "../../../../../src/app/article/markdown.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__("../../../../marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MarkdownPipe = (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (content) {
        return __WEBPACK_IMPORTED_MODULE_1_marked__(content, { sanitize: true });
    };
    return MarkdownPipe;
}());
MarkdownPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'markdown' })
], MarkdownPipe);

//# sourceMappingURL=markdown.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/auth/NSTest-auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\">{{ title }}</h1>\n        <p class=\"text-xs-center\">\n          <a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\n          <a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\n        </p>\n        <list-errors [errors]=\"errors\"></list-errors>\n        <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"username\"\n                placeholder=\"Username\"\n                class=\"form-control form-control-lg\"\n                type=\"text\"\n                *ngIf=\"authType == 'register'\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"email\"\n                placeholder=\"Email\"\n                class=\"form-control form-control-lg\"\n                type=\"text\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"password\"\n                placeholder=\"Password\"\n                class=\"form-control form-control-lg\"\n                type=\"password\" />\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"!authForm.valid\" type=\"submit\">\n              {{ title }}\n            </button>\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/NsTest-auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestAuthComponent = (function () {
    function NsTestAuthComponent(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = new __WEBPACK_IMPORTED_MODULE_3__shared__["Errors"]();
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    NsTestAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (_this.authType === 'register') {
                _this.authForm.addControl('username', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]());
            }
        });
    };
    NsTestAuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = new __WEBPACK_IMPORTED_MODULE_3__shared__["Errors"]();
        var credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    return NsTestAuthComponent;
}());
NsTestAuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'auth-page',
        template: __webpack_require__("../../../../../src/app/auth/NSTest-auth.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], NsTestAuthComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=NsTest-auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/NsTest-no-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoAuthGuard = (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1).map(function (bool) { return !bool; });
    };
    return NoAuthGuard;
}());
NoAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _b || Object])
], NoAuthGuard);

var _a, _b;
//# sourceMappingURL=NsTest-no-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_auth_component__ = __webpack_require__("../../../../../src/app/auth/NsTest-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_no_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/NsTest-no-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_router__ = __webpack_require__("../../../../../src/app/auth/auth.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__auth_router__["a" /* AuthRouter */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["SharedModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__NsTest_auth_component__["a" /* NsTestAuthComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__NsTest_no_auth_guard_service__["a" /* NoAuthGuard */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_auth_component__ = __webpack_require__("../../../../../src/app/auth/NsTest-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_no_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/NsTest-no-auth-guard.service.ts");



var AUTH_ROUTER = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__NsTest_auth_component__["a" /* NsTestAuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__NsTest_no_auth_guard_service__["a" /* NoAuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__NsTest_auth_component__["a" /* NsTestAuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__NsTest_no_auth_guard_service__["a" /* NoAuthGuard */]]
    }
];
var AuthRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(AUTH_ROUTER);
//# sourceMappingURL=auth.router.js.map

/***/ }),

/***/ "../../../../../src/app/editor/NsTest-editable-article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableArticleResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableArticleResolver = (function () {
    function EditableArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    EditableArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .map(function (article) {
            if (_this.userService.getCurrentUser().username === article.author.username) {
                return article;
            }
            else {
                _this.router.navigateByUrl('/');
            }
        })
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return EditableArticleResolver;
}());
EditableArticleResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestArticlesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestArticlesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _c || Object])
], EditableArticleResolver);

var _a, _b, _c;
//# sourceMappingURL=NsTest-editable-article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/editor/NsTest-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors [errors]=\"errors\"></list-errors>\n\n        <form [formGroup]=\"articleForm\">\n          <fieldset [disabled]=\"isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                formControlName=\"title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                formControlName=\"description\"\n                type=\"text\"\n                placeholder=\"What's this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                formControlName=\"body\"\n                rows=\"8\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                [formControl]=\"tagField\"\n                (keyup.enter)=\"addTag()\" />\n\n              <div class=\"tag-list\">\n                <span *ngFor=\"let tag of article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" (click)=\"removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" (click)=\"submitForm()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/NsTest-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestEditorComponent = (function () {
    function NsTestEditorComponent(articlesService, route, router, fb) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.article = new __WEBPACK_IMPORTED_MODULE_3__shared__["Article"]();
        this.tagField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: '',
        });
        // Optional: subscribe to value changes on the form
        // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
    }
    NsTestEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an article prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.article) {
                _this.article = data.article;
                _this.articleForm.patchValue(data.article);
            }
        });
    };
    NsTestEditorComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.article.tagList.indexOf(tag) < 0) {
            this.article.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    NsTestEditorComponent.prototype.removeTag = function (tagName) {
        this.article.tagList = this.article.tagList.filter(function (tag) { return tag !== tagName; });
    };
    NsTestEditorComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateArticle(this.articleForm.value);
        // post the changes
        this.articlesService
            .save(this.article)
            .subscribe(function (article) { return _this.router.navigateByUrl('/article/' + article.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    NsTestEditorComponent.prototype.updateArticle = function (values) {
        Object.assign(this.article, values);
    };
    return NsTestEditorComponent;
}());
NsTestEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'editor-page',
        template: __webpack_require__("../../../../../src/app/editor/NsTest-editor.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestArticlesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestArticlesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], NsTestEditorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=NsTest-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_router__ = __webpack_require__("../../../../../src/app/editor/editor.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_editor_component__ = __webpack_require__("../../../../../src/app/editor/NsTest-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_editable_article_resolver_service__ = __webpack_require__("../../../../../src/app/editor/NsTest-editable-article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditorModule = (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__editor_router__["a" /* EditorRouter */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["SharedModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__NsTest_editor_component__["a" /* NsTestEditorComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__NsTest_editable_article_resolver_service__["a" /* EditableArticleResolver */],
        ]
    })
], EditorModule);

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_editor_NsTest_editor_component__ = __webpack_require__("../../../../../src/app/editor/NsTest-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_editable_article_resolver_service__ = __webpack_require__("../../../../../src/app/editor/NsTest-editable-article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");




var EDITOR_ROUTER = [
    {
        path: 'editor',
        component: __WEBPACK_IMPORTED_MODULE_1_app_editor_NsTest_editor_component__["a" /* NsTestEditorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared__["NsTestAuthGuard"]]
    },
    {
        path: 'editor/:slug',
        component: __WEBPACK_IMPORTED_MODULE_1_app_editor_NsTest_editor_component__["a" /* NsTestEditorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared__["NsTestAuthGuard"]],
        resolve: {
            article: __WEBPACK_IMPORTED_MODULE_2__NsTest_editable_article_resolver_service__["a" /* EditableArticleResolver */]
        }
    }
];
var EditorRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(EDITOR_ROUTER);
//# sourceMappingURL=editor.router.js.map

/***/ }),

/***/ "../../../../../src/app/home/NsTest-home-auth-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAuthResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeAuthResolver = (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.take(1);
    };
    return HomeAuthResolver;
}());
HomeAuthResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _b || Object])
], HomeAuthResolver);

var _a, _b;
//# sourceMappingURL=NsTest-home-auth-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/NsTest-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n  cursor:pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/NsTest-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n\n  <div class=\"banner\" *showAuthed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\">NsTest Angular</h1>\n      <p>Sample Blog App</p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-9\">\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'feed'}\"\n                 (click)=\"setListTo('feed')\">\n                 Your Feed\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'all' && !listConfig.filters.tag}\"\n                 (click)=\"setListTo('all')\">\n                 Global Feed\n              </a>\n            </li>\n            <li class=\"nav-item\" [hidden]=\"!listConfig.filters.tag\">\n              <a class=\"nav-link active\">\n                <i class=\"ion-pound\"></i> {{ listConfig.filters.tag }}\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <article-list [limit]=\"10\" [config]=\"listConfig\"></article-list>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n          <p>Popular Tags</p>\n\n          <div class=\"tag-list\">\n            <a href=\"#\"\n               *ngFor=\"let tag of tags\"\n               (click)=\"setListTo('all', {tag: tag})\"\n               class=\"tag-default tag-pill\">\n               {{ tag }}\n            </a>\n          </div>\n\n          <div [hidden]=\"tagsLoaded\">\n            Loading tags...\n          </div>\n\n          <div [hidden]=\"!tagsLoaded || tags.length\">\n            No tags are here... yet.\n          </div>\n        \n        \n        \n        </div>\n       \n      </div>\n\n    </div>\n    <div class=\"row\">\n   <div class=\"col-md-9\">\n\n   </div>\n   <div class=\"col-md-3\">\n\n      <div class=\"sidebar custsidebar\">\n          <div [ngSwitch]=\"myname\" >\n              <ng-template [ngSwitchCase]= \"'noSubscribe'\"> <a>create Your own blog </a>> Direction </ng-template>\n              <ng-template [ngSwitchCase]= \"'buybooks'\"> <a> Buy books</a>> </ng-template>\n              <ng-template ngSwitchDefault><a> Subscribe here</a> </ng-template>\n            </div>\n          </div>\n     </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/NsTest-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestHomeComponent = (function () {
    function NsTestHomeComponent(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.listConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["ArticleListConfig"]();
        this.tags = [];
        this.tagsLoaded = false;
    }
    NsTestHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            // set the article list accordingly
            if (authenticated) {
                _this.setListTo('feed');
            }
            else {
                _this.setListTo('all');
            }
        });
        this.tagsService.getAll()
            .subscribe(function (tags) {
            _this.tags = tags;
            if (tags.length > 0) {
                _this.myname = "east";
            }
            _this.tagsLoaded = true;
        });
    };
    NsTestHomeComponent.prototype.setListTo = function (type, filters) {
        if (type === void 0) { type = ''; }
        if (filters === void 0) { filters = {}; }
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        // Otherwise, set the list object
        this.listConfig = { type: type, filters: filters };
    };
    return NsTestHomeComponent;
}());
NsTestHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-page',
        template: __webpack_require__("../../../../../src/app/home/NsTest-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/NsTest-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestTagsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestTagsService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _c || Object])
], NsTestHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=NsTest-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_home_component__ = __webpack_require__("../../../../../src/app/home/NsTest-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_home_auth_resolver_service__ = __webpack_require__("../../../../../src/app/home/NsTest-home-auth-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_router__ = __webpack_require__("../../../../../src/app/home/home.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__home_router__["a" /* homeRouter */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["SharedModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__NsTest_home_component__["a" /* NsTestHomeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__NsTest_home_auth_resolver_service__["a" /* HomeAuthResolver */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_home_NsTest_home_component__ = __webpack_require__("../../../../../src/app/home/NsTest-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_home_auth_resolver_service__ = __webpack_require__("../../../../../src/app/home/NsTest-home-auth-resolver.service.ts");



var HOME_ROUTER = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1_app_home_NsTest_home_component__["a" /* NsTestHomeComponent */],
        resolve: {
            isAuthenticated: __WEBPACK_IMPORTED_MODULE_2__NsTest_home_auth_resolver_service__["a" /* HomeAuthResolver */]
        }
    }
];
var homeRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(HOME_ROUTER);
//# sourceMappingURL=home.router.js.map

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<article-list [limit]=\"10\" [config]=\"articlesConfig\">\n</article-list>\n"

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestProfileArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestProfileArticlesComponent = (function () {
    function NsTestProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["ArticleListConfig"]();
    }
    NsTestProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["ArticleListConfig"]();
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    return NsTestProfileArticlesComponent;
}());
NsTestProfileArticlesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'profile-articles',
        template: __webpack_require__("../../../../../src/app/profile/NsTest-profile-articles.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NsTestProfileArticlesComponent);

var _a, _b;
//# sourceMappingURL=NsTest-profile-articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile-favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<article-list [limit]=\"10\" [config]=\"favoritesConfig\">\n</article-list>\n"

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile-favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestProfileFavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestProfileFavoritesComponent = (function () {
    function NsTestProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["ArticleListConfig"]();
    }
    NsTestProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    return NsTestProfileFavoritesComponent;
}());
NsTestProfileFavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'profile-favorites',
        template: __webpack_require__("../../../../../src/app/profile/NsTest-profile-favorites.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NsTestProfileFavoritesComponent);

var _a, _b;
//# sourceMappingURL=NsTest-profile-favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileResolver = (function () {
    function ProfileResolver(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['username'])
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return ProfileResolver;
}());
ProfileResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestProfilesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestProfilesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileResolver);

var _a, _b;
//# sourceMappingURL=NsTest-profile-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n          <img [src]=\"profile.image\" class=\"user-img\" />\n          <h4>{{ profile.username }}</h4>\n          <p>{{ profile.bio }}</p>\n          <follow-button\n            [hidden]=\"isUser\"\n            [profile]=\"profile\"\n            (onToggle)=\"onToggleFollowing($event)\">\n          </follow-button>\n           <a [routerLink]=\"['/settings']\"\n              [hidden]=\"!isUser\"\n              class=\"btn btn-sm btn-outline-secondary action-btn\">\n              <i class=\"ion-gear-a\"></i> Edit Profile Settings\n            </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username]\">\n                 My Posts\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username, 'favorites']\">\n                 Favorited Posts\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <router-outlet></router-outlet>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/NsTest-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestProfileProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestProfileProfileComponent = (function () {
    function NsTestProfileProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    NsTestProfileProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.profile = data.profile;
            // Load the current user's data.
            _this.userService.currentUser.subscribe(function (userData) {
                _this.currentUser = userData;
                _this.isUser = (_this.currentUser.username === _this.profile.username);
            });
        });
    };
    NsTestProfileProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    return NsTestProfileProfileComponent;
}());
NsTestProfileProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'profile-page',
        template: __webpack_require__("../../../../../src/app/profile/NsTest-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["NsTestUserService"]) === "function" && _b || Object])
], NsTestProfileProfileComponent);

var _a, _b;
//# sourceMappingURL=NsTest-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_profile_articles_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_profile_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_profile_favorites_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NsTest_profile_resolver_service__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_router__ = __webpack_require__("../../../../../src/app/profile/profile.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__profile_router__["a" /* profileRouter */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["SharedModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__NsTest_profile_articles_component__["a" /* NsTestProfileArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_2__NsTest_profile_component__["a" /* NsTestProfileProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_3__NsTest_profile_favorites_component__["a" /* NsTestProfileFavoritesComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__NsTest_profile_resolver_service__["a" /* ProfileResolver */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_profile_articles_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_profile_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_profile_favorites_component__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NsTest_profile_resolver_service__ = __webpack_require__("../../../../../src/app/profile/NsTest-profile-resolver.service.ts");





var PROFILE_ROUTER = [
    {
        path: 'profile/:username',
        component: __WEBPACK_IMPORTED_MODULE_2__NsTest_profile_component__["a" /* NsTestProfileProfileComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_4__NsTest_profile_resolver_service__["a" /* ProfileResolver */]
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__NsTest_profile_articles_component__["a" /* NsTestProfileArticlesComponent */]
            },
            {
                path: 'favorites',
                component: __WEBPACK_IMPORTED_MODULE_3__NsTest_profile_favorites_component__["a" /* NsTestProfileFavoritesComponent */]
            }
        ]
    }
];
var profileRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(PROFILE_ROUTER);
//# sourceMappingURL=profile.router.js.map

/***/ }),

/***/ "../../../../../src/app/settings/NsTest-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors [errors]=\"errors\"></list-errors>\n\n        <form [formGroup]=\"settingsForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                formControlName=\"image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                formControlName=\"username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                formControlName=\"bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                formControlName=\"email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                formControlName=\"password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          (click)=\"logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/NsTest-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestSettingsComponent = (function () {
    function NsTestSettingsComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared__["User"]();
        this.errors = {};
        this.isSubmitting = false;
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
        // Optional: subscribe to changes on the form
        // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
    }
    NsTestSettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);
    };
    NsTestSettingsComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    };
    NsTestSettingsComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user)
            .subscribe(function (updatedUser) { return _this.router.navigateByUrl('/profile/' + updatedUser.username); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    NsTestSettingsComponent.prototype.updateUser = function (values) {
        Object.assign(this.user, values);
    };
    return NsTestSettingsComponent;
}());
NsTestSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'settings-page',
        template: __webpack_require__("../../../../../src/app/settings/NsTest-settings.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["NsTestUserService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], NsTestSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=NsTest-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_settings_component__ = __webpack_require__("../../../../../src/app/settings/NsTest-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_router__ = __webpack_require__("../../../../../src/app/settings/settings.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3__settings_router__["a" /* settingsRouter */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__NsTest_settings_component__["a" /* NsTestSettingsComponent */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingsRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_settings_NsTest_settings_component__ = __webpack_require__("../../../../../src/app/settings/NsTest-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");



var SETTINGS_ROUTER = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_1_app_settings_NsTest_settings_component__["a" /* NsTestSettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["NsTestAuthGuard"]]
    }
];
var settingsRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(SETTINGS_ROUTER);
//# sourceMappingURL=settings.router.js.map

/***/ }),

/***/ "../../../../../src/app/shared/NsTest-list-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/NsTest-list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestListErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NsTestListErrorsComponent = (function () {
    function NsTestListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(NsTestListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = [];
            if (errorList.errors) {
                for (var field in errorList.errors) {
                    this.formattedErrors.push(field + " " + errorList.errors[field]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NsTestListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    return NsTestListErrorsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["Errors"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["Errors"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models__["Errors"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["Errors"]) === "function" && _b || Object])
], NsTestListErrorsComponent.prototype, "errors", null);
NsTestListErrorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'list-errors',
        template: __webpack_require__("../../../../../src/app/shared/NsTest-list-errors.component.html")
    })
], NsTestListErrorsComponent);

var _a, _b;
//# sourceMappingURL=NsTest-list-errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<article-preview\n  *ngFor=\"let article of results\"\n  [article]=\"article\">\n</article-preview>\n\n<div class=\"article-preview\"\n  [hidden]=\"!loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  [hidden]=\"loading || results.length\">\n  No articles are here... yet.\n</div>\n\n<nav [hidden]=\"loading || totalPages = 1\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\n      *ngFor=\"let pageNumber of totalPages\"\n      (click)=\"setPageTo(pageNumber)\">\n\n      <a class=\"page-link\" href=\"#\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestArticleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestArticleListComponent = (function () {
    function NsTestArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(NsTestArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    NsTestArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    NsTestArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    return NsTestArticleListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], NsTestArticleListComponent.prototype, "limit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["ArticleListConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["ArticleListConfig"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models__["ArticleListConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["ArticleListConfig"]) === "function" && _b || Object])
], NsTestArticleListComponent.prototype, "config", null);
NsTestArticleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'article-list',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* NsTestArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* NsTestArticlesService */]) === "function" && _c || Object])
], NsTestArticleListComponent);

var _a, _b, _c;
//# sourceMappingURL=NsTest-article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-meta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\n  <a [routerLink]=\"['/profile', article.author.username]\">\n    <img [src]=\"article.author.image\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      [routerLink]=\"['/profile', article.author.username]\">\n      {{ article.author.username }}\n    </a>\n    <span class=\"date\">\n      {{ article.createdAt | date: 'longDate' }}\n    </span>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-meta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestArticleMetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NsTestArticleMetaComponent = (function () {
    function NsTestArticleMetaComponent() {
    }
    return NsTestArticleMetaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["Article"]) === "function" && _a || Object)
], NsTestArticleMetaComponent.prototype, "article", void 0);
NsTestArticleMetaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'article-meta',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-meta.component.html")
    })
], NsTestArticleMetaComponent);

var _a;
//# sourceMappingURL=NsTest-article-meta.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\n  <article-meta [article]=\"article\">\n    <favorite-button\n      [article]=\"article\"\n      (onToggle)=\"onToggleFavorite($event)\"\n      class=\"pull-xs-right\">\n      {{article.favoritesCount}}\n    </favorite-button>\n  </article-meta>\n\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\n    <h1>{{ article.title }}</h1>\n    <p>{{ article.description }}</p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        *ngFor=\"let tag of article.tagList\">\n        {{ tag }}\n      </li>\n    </ul>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/NsTest-article-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestArticlePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NsTestArticlePreviewComponent = (function () {
    function NsTestArticlePreviewComponent() {
    }
    NsTestArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    return NsTestArticlePreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["Article"]) === "function" && _a || Object)
], NsTestArticlePreviewComponent.prototype, "article", void 0);
NsTestArticlePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'article-preview',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-preview.component.html")
    })
], NsTestArticlePreviewComponent);

var _a;
//# sourceMappingURL=NsTest-article-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NsTest_article_list_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__NsTest_article_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_article_meta_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-meta.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__NsTest_article_meta_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_article_preview_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/NsTest-article-preview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__NsTest_article_preview_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/NsTest-favorite-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\n [ngClass]=\"{ 'disabled' : isSubmitting,\n              'btn-outline-primary': !article.favorited,\n              'btn-primary': article.favorited }\"\n (click)=\"toggleFavorite()\">\n  <i class=\"ion-heart\"></i> <ng-content></ng-content>\n</button>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/buttons/NsTest-favorite-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestFavoriteButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestFavoriteButtonComponent = (function () {
    function NsTestFavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    NsTestFavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article.favorited) {
                _this.articlesService.favorite(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
                // Otherwise, unfavorite the article
            }
            else {
                _this.articlesService.unfavorite(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    return NsTestFavoriteButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["Article"]) === "function" && _a || Object)
], NsTestFavoriteButtonComponent.prototype, "article", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NsTestFavoriteButtonComponent.prototype, "onToggle", void 0);
NsTestFavoriteButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'favorite-button',
        template: __webpack_require__("../../../../../src/app/shared/buttons/NsTest-favorite-button.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* NsTestArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* NsTestArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["i" /* NsTestUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["i" /* NsTestUserService */]) === "function" && _d || Object])
], NsTestFavoriteButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=NsTest-favorite-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/NsTest-follow-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"btn btn-sm action-btn\"\n  [ngClass]=\"{ 'disabled': isSubmitting,\n               'btn-outline-secondary': !profile.following,\n               'btn-secondary': profile.following }\"\n  (click)=\"toggleFollowing()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/buttons/NsTest-follow-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestFollowButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestFollowButtonComponent = (function () {
    function NsTestFollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    NsTestFollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                _this.profilesService.follow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
                // Otherwise, unfollow this profile
            }
            else {
                _this.profilesService.unfollow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    return NsTestFollowButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["Profile"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["Profile"]) === "function" && _a || Object)
], NsTestFollowButtonComponent.prototype, "profile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NsTestFollowButtonComponent.prototype, "onToggle", void 0);
NsTestFollowButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'follow-button',
        template: __webpack_require__("../../../../../src/app/shared/buttons/NsTest-follow-button.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["g" /* NsTestProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["g" /* NsTestProfilesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["i" /* NsTestUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["i" /* NsTestUserService */]) === "function" && _d || Object])
], NsTestFollowButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=NsTest-follow-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NsTest_favorite_button_component__ = __webpack_require__("../../../../../src/app/shared/buttons/NsTest-favorite-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__NsTest_favorite_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_follow_button_component__ = __webpack_require__("../../../../../src/app/shared/buttons/NsTest-follow-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__NsTest_follow_button_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_helpers__ = __webpack_require__("../../../../../src/app/shared/article-helpers/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__("../../../../../src/app/shared/buttons/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("../../../../../src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestFooterComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestHeaderComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_list_errors_component__ = __webpack_require__("../../../../../src/app/shared/NsTest-list-errors.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "ApiService")) __webpack_require__.d(__webpack_exports__, "ApiService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["ApiService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "Article")) __webpack_require__.d(__webpack_exports__, "Article", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["Article"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "ArticleListConfig")) __webpack_require__.d(__webpack_exports__, "ArticleListConfig", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["ArticleListConfig"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "Comment")) __webpack_require__.d(__webpack_exports__, "Comment", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["Comment"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "Errors")) __webpack_require__.d(__webpack_exports__, "Errors", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["Errors"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestArticlesService")) __webpack_require__.d(__webpack_exports__, "NsTestArticlesService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestArticlesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestAuthGuard")) __webpack_require__.d(__webpack_exports__, "NsTestAuthGuard", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestAuthGuard"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestCRUDbooksService")) __webpack_require__.d(__webpack_exports__, "NsTestCRUDbooksService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestCRUDbooksService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestCommentsService")) __webpack_require__.d(__webpack_exports__, "NsTestCommentsService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestCommentsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestJwtService")) __webpack_require__.d(__webpack_exports__, "NsTestJwtService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestJwtService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestProfilesService")) __webpack_require__.d(__webpack_exports__, "NsTestProfilesService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestProfilesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestTagsService")) __webpack_require__.d(__webpack_exports__, "NsTestTagsService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestTagsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "NsTestUserService")) __webpack_require__.d(__webpack_exports__, "NsTestUserService", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["NsTestUserService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "SharedModule")) __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["SharedModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__models__, "User")) __webpack_require__.d(__webpack_exports__, "User", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["User"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestArticlesService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestAuthGuard", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestCRUDbooksService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestCommentsService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestJwtService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestProfilesService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestTagsService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NsTestUserService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return __WEBPACK_IMPORTED_MODULE_6__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_authed_directive__ = __webpack_require__("../../../../../src/app/shared/show-authed.directive.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/NStest_Footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" routerLink=\"/\">@ haritha.m</a>\n    <span class=\"attribution\">\n      &copy; {{ today | date: 'yyyy' }}.\n   <a>   This is Sample Project</a>.\n  \n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/NStest_Footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NsTestFooterComponent = (function () {
    function NsTestFooterComponent() {
        this.today = Date.now();
    }
    return NsTestFooterComponent;
}());
NsTestFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'layout-footer',
        template: __webpack_require__("../../../../../src/app/shared/layout/NStest_Footer.component.html")
    })
], NsTestFooterComponent);

//# sourceMappingURL=NStest_Footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/NStest_header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-laread nav-down\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Ns Test Angular</a>\n\n    <!-- Show this for logged out users -->\n    <ul *showAuthed=\"false\" \n      class=\"nav navbar-nav\">\n\n      <li class=\"nav-item\"> \n        <a class=\"nav-link\"\n          routerLink=\"/\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/login\"\n          routerLinkActive=\"active\">\n          Sign in\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/register\"\n          routerLinkActive=\"active\">\n          Sign up\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged in users -->\n    <ul *showAuthed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/editor\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-compose\"></i>&nbsp;New Article\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/books\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-compose\"></i>&nbsp;New Books\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/settings\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          [routerLink]=\"['/profile', currentUser.username]\"\n          routerLinkActive=\"active\">\n          <img [src]=\"currentUser.image\" *ngIf=\"currentUser.image\" class=\"user-pic\" />\n          {{ currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/NStest_header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NsTestHeaderComponent = (function () {
    function NsTestHeaderComponent(userService) {
        this.userService = userService;
    }
    NsTestHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    return NsTestHeaderComponent;
}());
NsTestHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'layout-header',
        template: __webpack_require__("../../../../../src/app/shared/layout/NStest_header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* NsTestUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* NsTestUserService */]) === "function" && _a || Object])
], NsTestHeaderComponent);

var _a;
//# sourceMappingURL=NStest_header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NStest_Footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/NStest_Footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__NStest_Footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NStest_header_component__ = __webpack_require__("../../../../../src/app/shared/layout/NStest_header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__NStest_header_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/BooksData.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=BooksData.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/article-list-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListConfig; });
var ArticleListConfig = (function () {
    function ArticleListConfig() {
        this.type = 'all';
        this.filters = {};
    }
    return ArticleListConfig;
}());

//# sourceMappingURL=article-list-config.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article() {
        this.title = '';
        this.description = '';
        this.body = '';
        this.tagList = [];
    }
    return Article;
}());

//# sourceMappingURL=article.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/books.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Books_CRUD; });
var Books_CRUD = [{
        Price: 1,
        name: 'Book name1',
        author: 'Author1',
        review: 'OK'
    }, {
        Price: 2,
        name: 'Book name2',
        author: 'Author2',
        review: 'Good'
    }, {
        Price: 3,
        name: 'Book name3',
        author: 'Author3',
        review: 'Bad'
    }];
//# sourceMappingURL=books.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/errors.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Errors; });
var Errors = (function () {
    function Errors() {
        this.errors = {};
    }
    return Errors;
}());

//# sourceMappingURL=errors.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_model__ = __webpack_require__("../../../../../src/app/shared/models/article.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return __WEBPACK_IMPORTED_MODULE_0__article_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_list_config_model__ = __webpack_require__("../../../../../src/app/shared/models/article-list-config.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ArticleListConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__article_list_config_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_model__ = __webpack_require__("../../../../../src/app/shared/models/comment.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return __WEBPACK_IMPORTED_MODULE_2__comment_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_model__ = __webpack_require__("../../../../../src/app/shared/models/errors.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return __WEBPACK_IMPORTED_MODULE_3__errors_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_model__ = __webpack_require__("../../../../../src/app/shared/models/profile.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return __WEBPACK_IMPORTED_MODULE_4__profile_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "User", function() { return __WEBPACK_IMPORTED_MODULE_5__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BooksData_model__ = __webpack_require__("../../../../../src/app/shared/models/BooksData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BooksData_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "ApiService")) __webpack_require__.d(__webpack_exports__, "ApiService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["ApiService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestArticlesService")) __webpack_require__.d(__webpack_exports__, "NsTestArticlesService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestArticlesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestAuthGuard")) __webpack_require__.d(__webpack_exports__, "NsTestAuthGuard", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestAuthGuard"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestCRUDbooksService")) __webpack_require__.d(__webpack_exports__, "NsTestCRUDbooksService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestCRUDbooksService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestCommentsService")) __webpack_require__.d(__webpack_exports__, "NsTestCommentsService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestCommentsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestJwtService")) __webpack_require__.d(__webpack_exports__, "NsTestJwtService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestJwtService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestProfilesService")) __webpack_require__.d(__webpack_exports__, "NsTestProfilesService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestProfilesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestTagsService")) __webpack_require__.d(__webpack_exports__, "NsTestTagsService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestTagsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "NsTestUserService")) __webpack_require__.d(__webpack_exports__, "NsTestUserService", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["NsTestUserService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__BooksData_model__, "SharedModule")) __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return __WEBPACK_IMPORTED_MODULE_6__BooksData_model__["SharedModule"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/profile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-CRUD-books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestCRUDbooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_books_model__ = __webpack_require__("../../../../../src/app/shared/models/books.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NsTestCRUDbooksService = (function () {
    function NsTestCRUDbooksService(apiService) {
        this.apiService = apiService;
        this.BooksList = __WEBPACK_IMPORTED_MODULE_4__models_books_model__["a" /* Books_CRUD */];
    }
    NsTestCRUDbooksService.prototype.getBooksFromData = function () {
        return this.BooksList;
    };
    NsTestCRUDbooksService.prototype.addBook = function (book) {
        this.BooksList.push(book);
    };
    NsTestCRUDbooksService.prototype.updateBook = function (book, postindex) {
        //let index=findIndex(this.BooksList,(u:BooksData)=>{
        // return u.id=== book.id
        // })
        var getindex = this.BooksList.indexOf(book);
        this.BooksList[postindex] = book;
    };
    NsTestCRUDbooksService.prototype.deleteBook = function (book) {
        var getindex = this.BooksList.indexOf(book);
        this.BooksList.splice(this.BooksList.indexOf(book), 1);
    };
    return NsTestCRUDbooksService;
}());
NsTestCRUDbooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NsTestCRUDbooksService);

var _a;
//# sourceMappingURL=NsTest-CRUD-books.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NsTestArticlesService = (function () {
    function NsTestArticlesService(apiService) {
        this.apiService = apiService;
    }
    NsTestArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        Object.keys(config.filters)
            .forEach(function (key) {
            params.set(key, config.filters[key]);
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), params).map(function (data) { return data; });
    };
    NsTestArticlesService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug)
            .map(function (data) { return data.article; });
    };
    NsTestArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    NsTestArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .map(function (data) { return data.article; });
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .map(function (data) { return data.article; });
        }
    };
    NsTestArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    };
    NsTestArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    };
    return NsTestArticlesService;
}());
NsTestArticlesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NsTestArticlesService);

var _a;
//# sourceMappingURL=NsTest-articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_user_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NsTestAuthGuard = (function () {
    function NsTestAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NsTestAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1);
    };
    return NsTestAuthGuard;
}());
NsTestAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__NsTest_user_service__["a" /* NsTestUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__NsTest_user_service__["a" /* NsTestUserService */]) === "function" && _b || Object])
], NsTestAuthGuard);

var _a, _b;
//# sourceMappingURL=NsTest-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestCommentsService = (function () {
    function NsTestCommentsService(apiService) {
        this.apiService = apiService;
    }
    NsTestCommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).map(function (data) { return data.comment; });
    };
    NsTestCommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .map(function (data) { return data.comments; });
    };
    NsTestCommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    return NsTestCommentsService;
}());
NsTestCommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NsTestCommentsService);

var _a;
//# sourceMappingURL=NsTest-comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestJwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NsTestJwtService = (function () {
    function NsTestJwtService() {
    }
    NsTestJwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    NsTestJwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    NsTestJwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    return NsTestJwtService;
}());
NsTestJwtService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NsTestJwtService);

//# sourceMappingURL=NsTest-jwt.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestProfilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestProfilesService = (function () {
    function NsTestProfilesService(apiService) {
        this.apiService = apiService;
    }
    NsTestProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .map(function (data) { return data.profile; });
    };
    NsTestProfilesService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    NsTestProfilesService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    return NsTestProfilesService;
}());
NsTestProfilesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NsTestProfilesService);

var _a;
//# sourceMappingURL=NsTest-profiles.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-tags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestTagsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NsTestTagsService = (function () {
    function NsTestTagsService(apiService) {
        this.apiService = apiService;
    }
    NsTestTagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .map(function (data) { return data.tags; });
    };
    return NsTestTagsService;
}());
NsTestTagsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NsTestTagsService);

var _a;
//# sourceMappingURL=NsTest-tags.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/NsTest-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsTestUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NsTest_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NsTestUserService = (function () {
    function NsTestUserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_8__models__["User"]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    NsTestUserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    NsTestUserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    NsTestUserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_8__models__["User"]());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    NsTestUserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .map(function (data) {
            _this.setAuth(data.user);
            return data;
        });
    };
    NsTestUserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    NsTestUserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        });
    };
    return NsTestUserService;
}());
NsTestUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__NsTest_jwt_service__["a" /* NsTestJwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__NsTest_jwt_service__["a" /* NsTestJwtService */]) === "function" && _c || Object])
], NsTestUserService);

var _a, _b, _c;
//# sourceMappingURL=NsTest-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NsTest_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = "Token " + this.jwtService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__NsTest_jwt_service__["a" /* NsTestJwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__NsTest_jwt_service__["a" /* NsTestJwtService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NsTest_articles_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-articles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__NsTest_articles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NsTest_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-auth-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__NsTest_auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NsTest_comments_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-comments.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__NsTest_comments_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NsTest_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__NsTest_jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NsTest_profiles_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-profiles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__NsTest_profiles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NsTest_tags_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-tags.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__NsTest_tags_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NsTest_user_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__NsTest_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NsTest_CRUD_books_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-CRUD-books.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__NsTest_CRUD_books_service__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_helpers__ = __webpack_require__("../../../../../src/app/shared/article-helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buttons__ = __webpack_require__("../../../../../src/app/shared/buttons/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NsTest_list_errors_component__ = __webpack_require__("../../../../../src/app/shared/NsTest-list-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__ = __webpack_require__("../../../../../src/app/shared/show-authed.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* NsTestArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* NsTestArticleMetaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* NsTestArticlePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* NsTestFavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* NsTestFollowButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__NsTest_list_errors_component__["a" /* NsTestListErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* NsTestArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* NsTestArticleMetaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* NsTestArticlePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* NsTestFavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* NsTestFollowButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__NsTest_list_errors_component__["a" /* NsTestListErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/show-authed.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAuthedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_NsTest_user_service__ = __webpack_require__("../../../../../src/app/shared/services/NsTest-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthedDirective = (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "showAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    return ShowAuthedDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ShowAuthedDirective.prototype, "showAuthed", null);
ShowAuthedDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({ selector: '[showAuthed]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_NsTest_user_service__["a" /* NsTestUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_NsTest_user_service__["a" /* NsTestUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _c || Object])
], ShowAuthedDirective);

var _a, _b, _c;
//# sourceMappingURL=show-authed.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api_url: 'https://conduit.productionready.io/api',
    tempurl: './NsTest-editor.component.html'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
var bootstrapPromise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map