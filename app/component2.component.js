System.register(['@angular/core', "./logging.service", "./calculator.service", "./data.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component2Component;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_logref, _calculatorService, _dataService) {
                    this._logref = _logref;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                    this.result = '';
                    this.weather = '';
                }
                Component2Component.prototype.onSend = function (name) {
                    this._logref.log(name);
                };
                Component2Component.prototype.onDivision = function (num1, num2) {
                    this.result = this._calculatorService.divide(num1, num2);
                };
                Component2Component.prototype.insertData = function (data) {
                    this._dataService.insert(data);
                    data = '';
                };
                Component2Component.prototype.getData = function () {
                    this.weather = this._dataService.randomise();
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n            <input type=\"text\" #message>\n            <button (click)=\"onSend(message.value)\">Send</button>\n            <h2>Calculator</h2>\n                <input type=\"text\" #num1>\n                <input type=\"text\" #num2>\n                <button (click)=\"onDivision(num1.value, num2.value)\">Divide</button>\n                <div>Result: {{result}}</div>\n                \n                <div>\n                    <h2>Get Data from the Service</h2>\n                    <button (click)=\"getData()\">Get Data</button>\n                    <p>Weather is {{weather}}</p>\n                    <input type=\"text\" #insert>\n                    <button (click)=\"insertData(insert.value)\">Insert</button>\n                </div>\n\n    ",
                        providers: [data_service_1.DataService],
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQUdJLDZCQUFvQixPQUF1QixFQUFVLGtCQUFxQyxFQUFVLFlBQTBCO29CQUExRyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUY5SCxXQUFNLEdBQUMsRUFBRSxDQUFDO29CQUNWLFlBQU8sR0FBQyxFQUFFLENBQUM7Z0JBQ3FILENBQUM7Z0JBRWpJLG9DQUFNLEdBQU4sVUFBTyxJQUFZO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELHdDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBWTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWLFVBQVcsSUFBWTtvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9CLElBQUksR0FBQyxFQUFFLENBQUM7Z0JBRVosQ0FBQztnQkFDRCxxQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsYUFBYTt3QkFDdEIsUUFBUSxFQUFDLG12QkFpQlI7d0JBQ0QsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFFMUIsQ0FBQzs7dUNBQUE7Z0JBd0JGLDBCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCxxREFxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gXCIuL2xvZ2dpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vY2FsY3VsYXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kYXRhLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TZW5kKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgyPkNhbGN1bGF0b3I8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGl2aXNpb24obnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5EaXZpZGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlJlc3VsdDoge3tyZXN1bHR9fTwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5HZXQgRGF0YSBmcm9tIHRoZSBTZXJ2aWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0RGF0YSgpXCI+R2V0IERhdGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2VhdGhlciBpcyB7e3dlYXRoZXJ9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2luc2VydD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaW5zZXJ0RGF0YShpbnNlcnQudmFsdWUpXCI+SW5zZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICBgLFxuICAgIHByb3ZpZGVyczpbRGF0YVNlcnZpY2VdLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50e1xuICAgIHJlc3VsdD0nJztcbiAgICB3ZWF0aGVyPScnO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ3JlZjogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSwgcHJpdmF0ZSBfZGF0YVNlcnZpY2UgOiBEYXRhU2VydmljZSl7fVxuXG4gICAgb25TZW5kKG5hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xvZ3JlZi5sb2cobmFtZSk7XG4gICAgfVxuICAgIG9uRGl2aXNpb24obnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnJlc3VsdD0gdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuZGl2aWRlKG51bTEsIG51bTIpO1xuICAgIH1cbiAgICBpbnNlcnREYXRhKGRhdGE6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydChkYXRhKTtcbiAgICAgICAgZGF0YT0nJztcblxuICAgIH1cbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHRoaXMud2VhdGhlcj0gdGhpcy5fZGF0YVNlcnZpY2UucmFuZG9taXNlKCk7XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
