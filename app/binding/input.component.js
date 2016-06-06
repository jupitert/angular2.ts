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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.inputData = new core_1.EventEmitter();
                    this.onSubmit = function () {
                        this.inputData.emit(this.myself);
                    };
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
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'input-compo',
                        template: "\n            <h1>Your details please,</h1>\n            <div>\n                 <label for=\"name\">Name</label>\n                 <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n            </div>\n            <div>\n                 <label for=\"age\">Age</label>\n                 <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n            </div>\n\n            <div>is Filled? {{isFilled ? 'Yes': 'No'}}</div>\n            <div>is Valid? {{isValid ? 'Yes': 'No'}}</div>\n         \n            <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Save</button>\n        ",
                        inputs: ['myself'],
                        outputs: ['inputData'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmcvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUNJLFdBQU0sR0FBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUMxQixhQUFRLEdBQUUsS0FBSyxDQUFDO29CQUNoQixZQUFPLEdBQUUsS0FBSyxDQUFDO29CQUNmLGNBQVMsR0FBRSxJQUFJLG1CQUFZLEVBQStCLENBQUM7b0JBQzNELGFBQVEsR0FBRzt3QkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQztvQkFFRixZQUFPLEdBQUc7d0JBQ04sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7NEJBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDO3dCQUN4QixDQUFDO3dCQUNELElBQUksQ0FBQSxDQUFDOzRCQUNELElBQUksQ0FBQyxRQUFRLEdBQUUsS0FBSyxDQUFDO3dCQUN6QixDQUFDO3dCQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFHLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQzt3QkFDdkIsQ0FBQzt3QkFDRCxJQUFJLENBQUEsQ0FBQzs0QkFDRCxJQUFJLENBQUMsT0FBTyxHQUFFLEtBQUssQ0FBQzt3QkFDeEIsQ0FBQztvQkFDTCxDQUFDLENBQUE7Z0JBQ0wsQ0FBQztnQkFoREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDSCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFDLDRvQkFlUjt3QkFDRCxNQUFNLEVBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFHN0IsQ0FBQzs7a0NBQUE7Z0JBMEJGLHFCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCwyQ0F1QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5nL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdpbnB1dC1jb21wbycsXG4gICAgICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgIDxoMT5Zb3VyIGRldGFpbHMgcGxlYXNlLDwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5pcyBGaWxsZWQ/IHt7aXNGaWxsZWQgPyAnWWVzJzogJ05vJ319PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PmlzIFZhbGlkPyB7e2lzVmFsaWQgPyAnWWVzJzogJ05vJ319PC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIGAsXG4gICAgICAgIGlucHV0czpbJ215c2VsZiddLFxuICAgICAgICBvdXRwdXRzOiBbJ2lucHV0RGF0YSddLFxuXG5cbn0pXG5cblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBteXNlbGY9IHtuYW1lOicnLCBhZ2U6Jyd9O1xuICAgIGlzRmlsbGVkPSBmYWxzZTtcbiAgICBpc1ZhbGlkPSBmYWxzZTtcbiAgICBpbnB1dERhdGE9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9PigpO1xuICAgIG9uU3VibWl0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5pbnB1dERhdGEuZW1pdCh0aGlzLm15c2VsZik7XG4gICAgfTtcblxuICAgIG9uS2V5dXAgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9JycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQ9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQ9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0nJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpe1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQ9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
