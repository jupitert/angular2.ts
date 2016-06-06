System.register(['@angular/core', './binding/input.component', './binding/confirm.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmmyself = { name: '', age: '' };
                    this.onSubmited = function (myself) {
                        this.myself = { name: myself.name, age: myself.age };
                        console.log(myself);
                    };
                    this.onConfirm = function (myself) {
                        this.confirmmyself = { name: myself.name, age: myself.age };
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n                <input-compo (inputData)=\"onSubmited($event)\" [myself]=\"confirmmyself\"></input-compo>\n        </div>\n        <div class=\"container\">\n            <confirm-input (confirmData)=\"onConfirm($event)\" [myself]=\"myself\"></confirm-input>\n        </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1iaW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUUsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDNUIsa0JBQWEsR0FBRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNuQyxlQUFVLEdBQUUsVUFBUyxNQUFrQzt3QkFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRSxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7d0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQztvQkFDRixjQUFTLEdBQUUsVUFBUyxNQUFrQzt3QkFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRSxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7b0JBQzdELENBQUMsQ0FBQTtnQkFDTCxDQUFDO2dCQXpCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxRQUFRO3dCQUNqQixRQUFRLEVBQUMsOFRBT1I7d0JBQ0QsVUFBVSxFQUFDLENBQUMsZ0NBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztxQkFJaEQsQ0FBQzs7Z0NBQUE7Z0JBV0YsbUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHVDQVVDLENBQUEiLCJmaWxlIjoiYXBwLWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5nL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnR9IGZyb20gJy4vYmluZGluZy9jb25maXJtLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LWFwcCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LWNvbXBvIChpbnB1dERhdGEpPVwib25TdWJtaXRlZCgkZXZlbnQpXCIgW215c2VsZl09XCJjb25maXJtbXlzZWxmXCI+PC9pbnB1dC1jb21wbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxjb25maXJtLWlucHV0IChjb25maXJtRGF0YSk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiIFtteXNlbGZdPVwibXlzZWxmXCI+PC9jb25maXJtLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W0lucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50XVxuXG5cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG15c2VsZj0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBjb25maXJtbXlzZWxmPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIG9uU3VibWl0ZWQ9IGZ1bmN0aW9uKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOnN0cmluZ30pe1xuICAgICAgICB0aGlzLm15c2VsZj0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgICAgICBjb25zb2xlLmxvZyhteXNlbGYpO1xuICAgIH07XG4gICAgb25Db25maXJtPSBmdW5jdGlvbihteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTpzdHJpbmd9KXtcbiAgICAgICAgdGhpcy5jb25maXJtbXlzZWxmPSB7bmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZX07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
