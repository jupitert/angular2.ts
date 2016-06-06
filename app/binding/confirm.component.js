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
    var core_1;
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmData = new core_1.EventEmitter();
                    this.onKeyup = function () {
                        if (this.myself.name != '' && this.myself.age != '') {
                            this.isFilled = true;
                        }
                        else {
                            this.isFilled = false;
                        }
                        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                            this.isValid = true;
                        }
                        else {
                            this.isValid = false;
                        }
                    };
                }
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmData.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'confirm-input',
                        template: "\n        <h1>You submitted the following details, is it correct?</h1>\n        <p>Your name is <span class=\"highlight\">{{myself.name}}</span> and your age is \n                <span class=\"highlight\">{{myself.age}}</span> years old. Please click on confirm\n                    if you have made changes</p>\n        <div>\n                 <label for=\"name\">Name</label>\n                 <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\" >\n            </div>\n            <div>\n                 <label for=\"age\">Age</label>\n                 <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\" >\n            </div>\n\n            <div>is Filled? {{isFilled ? 'Yes' :'No'}}</div>\n            <div>is Valid? {{isValid? 'Yes' :'No'}}</div>\n            <br>\n            <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Confirm</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmData'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmcvY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzFCLGFBQVEsR0FBRSxLQUFLLENBQUM7b0JBQ2hCLFlBQU8sR0FBRSxLQUFLLENBQUM7b0JBQ2YsZ0JBQVcsR0FBRSxJQUFJLG1CQUFZLEVBQStCLENBQUM7b0JBSTdELFlBQU8sR0FBRzt3QkFDTixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBRyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzs0QkFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUM7d0JBQ3hCLENBQUM7d0JBQ0QsSUFBSSxDQUFBLENBQUM7NEJBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRSxLQUFLLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUUsSUFBSSxDQUFDO3dCQUN2QixDQUFDO3dCQUNELElBQUksQ0FBQSxDQUFDOzRCQUNELElBQUksQ0FBQyxPQUFPLEdBQUUsS0FBSyxDQUFDO3dCQUN4QixDQUFDO29CQUNMLENBQUMsQ0FBQTtnQkFDTCxDQUFDO2dCQWpCRyxvQ0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLDQ1QkFrQlQ7d0JBQ0QsTUFBTSxFQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNqQixPQUFPLEVBQUMsQ0FBQyxhQUFhLENBQUM7cUJBRTFCLENBQUM7O29DQUFBO2dCQXVCRix1QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsK0NBc0JDLENBQUEiLCJmaWxlIjoiYmluZGluZy9jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidjb25maXJtLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nIGRldGFpbHMsIGlzIGl0IGNvcnJlY3Q/PC9oMT5cbiAgICAgICAgPHA+WW91ciBuYW1lIGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYubmFtZX19PC9zcGFuPiBhbmQgeW91ciBhZ2UgaXMgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e215c2VsZi5hZ2V9fTwvc3Bhbj4geWVhcnMgb2xkLiBQbGVhc2UgY2xpY2sgb24gY29uZmlybVxuICAgICAgICAgICAgICAgICAgICBpZiB5b3UgaGF2ZSBtYWRlIGNoYW5nZXM8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCIgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCIgPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+aXMgRmlsbGVkPyB7e2lzRmlsbGVkID8gJ1llcycgOidObyd9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5pcyBWYWxpZD8ge3tpc1ZhbGlkPyAnWWVzJyA6J05vJ319PC9kaXY+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICBgLFxuICAgIGlucHV0czpbJ215c2VsZiddLFxuICAgIG91dHB1dHM6Wydjb25maXJtRGF0YSddLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1Db21wb25lbnQge1xuICAgIG15c2VsZj0ge25hbWU6JycsIGFnZTonJ307XG4gICAgaXNGaWxsZWQ9IGZhbHNlO1xuICAgIGlzVmFsaWQ9IGZhbHNlO1xuICAgIGNvbmZpcm1EYXRhPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcbiAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuY29uZmlybURhdGEuZW1pdCh0aGlzLm15c2VsZik7XG4gICAgfVxuICAgIG9uS2V5dXAgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9JycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQ9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQ9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0nJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpe1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQ9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
