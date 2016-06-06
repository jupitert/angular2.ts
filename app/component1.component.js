System.register(['@angular/core', "./logging.service", "./calculator.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_logref, _calculatorService) {
                    this._logref = _logref;
                    this._calculatorService = _calculatorService;
                }
                Component1Component.prototype.onSend = function (name) {
                    this._logref.log(name);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAddition = function (num1, num2) {
                    this.result = this._calculatorService.add(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: " \n             <div>\n                <input type=\"text\" #message>\n                <button (click)=\"onSend(message.value)\">Send</button>\n            </div>\n            <div>\n                <h2>Calculator</h2>\n                <input type=\"text\" #num1>\n                <input type=\"text\" #num2>\n                <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n                <button (click)=\"onAddition(num1.value, num2.value)\">Add</button>\n                <div>Result: {{result}}</div>\n            </div>\n            \n    ",
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUVJLDZCQUFvQixPQUF1QixFQUFVLGtCQUFxQztvQkFBdEUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtnQkFBRSxDQUFDO2dCQUU3RixvQ0FBTSxHQUFOLFVBQU8sSUFBWTtvQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLElBQVk7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVuRSxDQUFDO2dCQUNELHdDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBWTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGFBQWE7d0JBQ3RCLFFBQVEsRUFBQyw0akJBY1I7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBaUJGLDBCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCxxREFjQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9jYWxjdWxhdG9yLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOmAgXG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblNlbmQobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkNhbGN1bGF0b3I8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkaXRpb24obnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlJlc3VsdDoge3tyZXN1bHR9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICBgLFxufSlcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudHtcbiAgICByZXN1bHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dyZWY6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2Upe31cblxuICAgIG9uU2VuZChuYW1lOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9sb2dyZWYubG9nKG5hbWUpO1xuICAgIH1cbiAgICBvbk11bHRpcGx5KG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nICl7XG4gICAgICAgICAgIHRoaXMucmVzdWx0PSB0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpO1xuXG4gICAgfVxuICAgIG9uQWRkaXRpb24obnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcgKXtcbiAgICAgICAgdGhpcy5yZXN1bHQ9IHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
