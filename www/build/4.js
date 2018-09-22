webpackJsonp([4],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPageModule", function() { return EditSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_student__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditSongPageModule = /** @class */ (function () {
    function EditSongPageModule() {
    }
    EditSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_student__["a" /* EditStudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_student__["a" /* EditStudentPage */]),
            ],
        })
    ], EditSongPageModule);
    return EditSongPageModule;
}());

//# sourceMappingURL=edit-student.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_students_service__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditStudentPage = /** @class */ (function () {
    function EditStudentPage(navCtrl, navParams, students) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.students = students;
    }
    EditStudentPage.prototype.ionViewWillLoad = function () {
        this.student = this.navParams.get('song');
    };
    EditStudentPage.prototype.saveSong = function (student) {
        var _this = this;
        this.students.editStudent(student).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditStudentPage.prototype.deleteSong = function (student) {
        var _this = this;
        this.students.removeStudent(student).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-student',template:/*ion-inline-start:"F:\aisha_project\StudentManagementApp\src\pages\edit-student\edit-student.html"*/'<!--\n  Generated template for the EditSongPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editing: {{student?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Student\'s Name </ion-label>\n    <ion-input [(ngModel)]="student.name">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Father\'s Name </ion-label>\n    <ion-input [(ngModel)]="student.fname">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Phone Number </ion-label>\n    <ion-input [(ngModel)]="student.phNumber">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Class </ion-label>\n    <ion-input [(ngModel)]="student.currentClass">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Fee Submitted For months </ion-label>\n    <ion-input [(ngModel)]="student.date1">\n    </ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="saveStudent(student)">Save Details </button>\n  <!-- <button ion-button block clear (click)="deleteSong(song)">Delete</button>-->\n</ion-content>'/*ion-inline-end:"F:\aisha_project\StudentManagementApp\src\pages\edit-student\edit-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_students_service__["a" /* StudentsService */]])
    ], EditStudentPage);
    return EditStudentPage;
}());

//# sourceMappingURL=edit-student.js.map

/***/ })

});
//# sourceMappingURL=4.js.map