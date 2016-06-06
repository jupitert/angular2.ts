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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Nuclei';
                    this.values = "";
                }
                AppComponent.prototype.testCall = function () {
                    return 1 === 1;
                };
                AppComponent.prototype.onKeyUp = function (val) {
                    this.values += val + '|';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{testCall()}}</h1>\n        <!--string interpolation 1-->\n        <input type=\"text\" value=\"{{name}}\" class=\"{{'red'}}\">\n        <!--property binding 2 []-->\n        <!--<input type=\"text\" [value]=\"name\" [ngClass]=\"'red'\"  [disabled]=\"1 === 1\">-->\n        <!--event binding 3 ()-->\n        <!--<input type=\"text\" (keyup)=\"onKeyUp(inputvalue.value)\" #inputvalue>-->\n        <!--two way binding 4-->\n        <br><br>\n        <input type=\"text\" [(ngModel)]=\"name\">\n        <p>The name is: {{name}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHR5cGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUUsUUFBUSxDQUFDO29CQUNmLFdBQU0sR0FBRSxFQUFFLENBQUM7Z0JBUWYsQ0FBQztnQkFQRywrQkFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQUNELDhCQUFPLEdBQVAsVUFBUSxHQUFXO29CQUNmLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQztnQkF4Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsUUFBUTt3QkFDakIsUUFBUSxFQUFDLHdpQkFZUjtxQkFDSixDQUFDOztnQ0FBQTtnQkFXRixtQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdUNBVUMsQ0FBQSIsImZpbGUiOiJhcHB0eXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidteS1hcHAnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPGgxPnt7dGVzdENhbGwoKX19PC9oMT5cbiAgICAgICAgPCEtLXN0cmluZyBpbnRlcnBvbGF0aW9uIDEtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e25hbWV9fVwiIGNsYXNzPVwie3sncmVkJ319XCI+XG4gICAgICAgIDwhLS1wcm9wZXJ0eSBiaW5kaW5nIDIgW10tLT5cbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgW25nQ2xhc3NdPVwiJ3JlZCdcIiAgW2Rpc2FibGVkXT1cIjEgPT09IDFcIj4tLT5cbiAgICAgICAgPCEtLWV2ZW50IGJpbmRpbmcgMyAoKS0tPlxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uS2V5VXAoaW5wdXR2YWx1ZS52YWx1ZSlcIiAjaW5wdXR2YWx1ZT4tLT5cbiAgICAgICAgPCEtLXR3byB3YXkgYmluZGluZyA0LS0+XG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgICAgICA8cD5UaGUgbmFtZSBpczoge3tuYW1lfX08L3A+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG5hbWU9ICdOdWNsZWknO1xuICAgIHZhbHVlcz0gXCJcIjtcbiAgICB0ZXN0Q2FsbCgpe1xuICAgICAgICByZXR1cm4gMSA9PT0gMTtcbiAgICB9XG4gICAgb25LZXlVcCh2YWw6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudmFsdWVzICs9IHZhbCArICd8JztcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
