(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-todo-item/add-todo-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-todo-item/add-todo-item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-todo-item/add-todo-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-todo-item/add-todo-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header class=\"header\">\n    <h1>Todos:</h1>\n    <mat-form-field>\n      <input class=\"new-todo\" matInput placeholder=\"What needs to be done?\" [(ngModel)]=\"newTodo.title\" (keyup.enter)=\"addTodo()\">\n    </mat-form-field>\n    <div *ngIf=\"todos.length > 1\">\n      <h3>Search your todo</h3>\n      <mat-form-field>\n        <input type=\"search\" matInput placeholder=\"Do you want to find any todos?\" [(ngModel)]=\"searchText\">\n      </mat-form-field>\n    </div>\n  </header>\n\n  <section class=\"todoapp\">\n\n    <section class=\"main\" *ngIf=\"todos.length > 0\">\n      <mat-list role=\"list\">\n        <mat-list-item *ngFor=\"let todo of todos | search : searchText\" [class.completed]=\"todo.complete\" role=\"listitem\">\n          <div class=\"view\">\n            <mat-checkbox\n              class=\"example-margin\"\n              (change)=\"toggleTodoComplete(todo)\"\n              [checked]=\"todo.complete\">\n              <label>{{todo.title}}</label>\n            </mat-checkbox>\n            <button mat-button color=\"warn\" (click)=\"removeTodo(todo)\">Delete todo item</button>\n          </div>\n        </mat-list-item>\n      </mat-list>\n    </section>\n\n    <section class=\"todoapp\">\n      <footer class=\"footer\" *ngIf=\"todos.length > 0\">\n        <span class=\"todo-count\">Total: all: {{todos.length}}, completed: {{complete.length}}</span>\n      </footer>\n    </section>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/add-todo-item/add-todo-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-todo-item/add-todo-item.component.ts ***!
  \**********************************************************/
/*! exports provided: AddTodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoItemComponent", function() { return AddTodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/app/todo.ts");
/* harmony import */ var _services_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo-data.service */ "./src/services/todo-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTodoItemComponent = /** @class */ (function () {
    function AddTodoItemComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]();
        this.searchText = '';
    }
    Object.defineProperty(AddTodoItemComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTodoItemComponent.prototype, "complete", {
        get: function () {
            return this.todoDataService.getCompleteTodos();
        },
        enumerable: true,
        configurable: true
    });
    AddTodoItemComponent.prototype.addTodo = function () {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]();
    };
    AddTodoItemComponent.prototype.toggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AddTodoItemComponent.prototype.removeTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo.id);
    };
    AddTodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-todo-item',
            template: __webpack_require__(/*! ./add-todo-item.component.html */ "./src/app/add-todo-item/add-todo-item.component.html"),
            styles: [__webpack_require__(/*! ./add-todo-item.component.css */ "./src/app/add-todo-item/add-todo-item.component.css")],
            providers: [_services_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"]]
        }),
        __metadata("design:paramtypes", [_services_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"]])
    ], AddTodoItemComponent);
    return AddTodoItemComponent;
}());



/***/ }),

/***/ "./src/app/add-todo-item/search.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/add-todo-item/search.pipe.ts ***!
  \**********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.title.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  border: 2px solid lightcoral;\r\n  background-color: #fafbfc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <app-add-todo-item></app-add-todo-item>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo Application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_todo_item_add_todo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-todo-item/add-todo-item.component */ "./src/app/add-todo-item/add-todo-item.component.ts");
/* harmony import */ var _add_todo_item_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-todo-item/search.pipe */ "./src/app/add-todo-item/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _add_todo_item_add_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["AddTodoItemComponent"],
                _add_todo_item_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/*!*************************!*\
  !*** ./src/app/todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/todo-data.service.ts":
/*!*******************************************!*\
  !*** ./src/services/todo-data.service.ts ***!
  \*******************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
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

var TodoDataService = /** @class */ (function () {
    function TodoDataService() {
        // Placeholder for last id so we can simulate
        // automatic incrementing of ids
        this.lastId = 0;
        // Placeholder for todos
        this.todos = [];
    }
    // Simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        this.todos = this.todos
            .filter(function (todo) { return todo.id !== id; });
        return this;
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    // Toggle todo complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    };
    TodoDataService.prototype.getCompleteTodos = function () {
        return this.todos.filter(function (x) { return x.complete === true; });
    };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan\Desktop\Angular 6 training\Lesson 4\todo-application\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map