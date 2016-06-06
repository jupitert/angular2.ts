System.register(['@angular/core', "./component1.component", "./component2.component"], function(exports_1, context_1) {
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
    var core_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n              <component-1></component-1>\n              <br><br>\n              <component-2></component-2>\n             \n         ",
                        directives: [component1_component_1.Component1Component, component2_component_1.Component2Component],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFFBQVE7d0JBQ2pCLFFBQVEsRUFBQywwSUFLSDt3QkFDTixVQUFVLEVBQUMsQ0FBQywwQ0FBbUIsRUFBRSwwQ0FBbUIsQ0FBQztxQkFDeEQsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TXlTaG9wcGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmdsaXN0L215c2hvcHBpbmdsaXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wb25lbnQxQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQxLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wb25lbnQyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgICAgICAgIDxjb21wb25lbnQtMT48L2NvbXBvbmVudC0xPlxuICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICA8Y29tcG9uZW50LTI+PC9jb21wb25lbnQtMj5cbiAgICAgICAgICAgICBcbiAgICAgICAgIGAsXG4gICAgZGlyZWN0aXZlczpbQ29tcG9uZW50MUNvbXBvbmVudCwgQ29tcG9uZW50MkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
