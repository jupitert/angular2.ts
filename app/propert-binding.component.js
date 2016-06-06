System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var PropertyBinding;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PropertyBinding = (function () {
                function PropertyBinding() {
                    this.name = '';
                    this.age = '';
                    this.hobbiesChanged = new core_1.EventEmitter();
                    this.onHobbiesChange = function (hobbies) {
                        this.hobbiesChanged.emit(hobbies);
                    };
                    this.qualifyChanges = new core_1.EventEmitter();
                    this.onQualifyChange = function (qualify) {
                        this.qualifyChanges.emit(qualify);
                    };
                }
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBinding.prototype, "age", void 0);
                PropertyBinding = __decorate([
                    core_1.Component({
                        selector: 'data-bind',
                        template: "\n        <h2>This is the child Component</h2>\n        <p>Hey {{name}}!, your age is {{age}}.</p>\n        <p>my Hobbies are</p>\n        <input type=\"text\" (keyup)=\"onHobbiesChange(hobbies.value)\" #hobbies>\n        <input type=\"text\" (keyup)=\"onQualifyChange(qualify.value)\"  #qualify>\n    ",
                        inputs: ['name: myName'],
                        outputs: ['hobbiesChanged', 'qualifyChanges'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBinding);
                return PropertyBinding;
            }());
            exports_1("PropertyBinding", PropertyBinding);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnQtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO29CQUNJLFNBQUksR0FBRSxFQUFFLENBQUM7b0JBQ08sUUFBRyxHQUFFLEVBQUUsQ0FBQztvQkFFeEIsbUJBQWMsR0FBRSxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFDM0Msb0JBQWUsR0FBRSxVQUFTLE9BQWU7d0JBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNyQyxDQUFDLENBQUM7b0JBQ0YsbUJBQWMsR0FBRSxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFDM0Msb0JBQWUsR0FBRSxVQUFTLE9BQWU7d0JBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUE7Z0JBRUwsQ0FBQztnQkFYRztvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzs0REFBQTtnQkFoQm5CO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFdBQVc7d0JBQ3BCLFFBQVEsRUFBQyxnVEFNUjt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0JBQ3hCLE9BQU8sRUFBQyxDQUFDLGdCQUFnQixFQUFDLGdCQUFnQixDQUFDO3FCQUM5QyxDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELDZDQWFDLENBQUEiLCJmaWxlIjoicHJvcGVydC1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonZGF0YS1iaW5kJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxoMj5UaGlzIGlzIHRoZSBjaGlsZCBDb21wb25lbnQ8L2gyPlxuICAgICAgICA8cD5IZXkge3tuYW1lfX0hLCB5b3VyIGFnZSBpcyB7e2FnZX19LjwvcD5cbiAgICAgICAgPHA+bXkgSG9iYmllcyBhcmU8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJvbkhvYmJpZXNDaGFuZ2UoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uUXVhbGlmeUNoYW5nZShxdWFsaWZ5LnZhbHVlKVwiICAjcXVhbGlmeT5cbiAgICBgLFxuICAgIGlucHV0czogWyduYW1lOiBteU5hbWUnXSxcbiAgICBvdXRwdXRzOlsnaG9iYmllc0NoYW5nZWQnLCdxdWFsaWZ5Q2hhbmdlcyddLFxufSlcblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nIHtcbiAgICBuYW1lPSAnJztcbiAgICBASW5wdXQoJ215QWdlJykgYWdlPSAnJztcblxuICAgIGhvYmJpZXNDaGFuZ2VkPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBvbkhvYmJpZXNDaGFuZ2U9IGZ1bmN0aW9uKGhvYmJpZXM6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaG9iYmllc0NoYW5nZWQuZW1pdChob2JiaWVzKVxuICAgIH07XG4gICAgcXVhbGlmeUNoYW5nZXM9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIG9uUXVhbGlmeUNoYW5nZT0gZnVuY3Rpb24ocXVhbGlmeTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5xdWFsaWZ5Q2hhbmdlcy5lbWl0KHF1YWxpZnkpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
