System.register(['@angular/core', './test-component'], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var secondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            secondComponent = (function () {
                function secondComponent() {
                    this.name = String;
                }
                secondComponent.prototype.ngOnInit = function () {
                    //this.name= "Shankar";
                };
                secondComponent = __decorate([
                    core_1.Component({
                        selector: 'second-component',
                        template: "\n        <h4>This <span [style.color]=\"agreement.value==='iagree'? 'red': ''\" >Nuclues</span> offers more components to our ecosystem</h4>\n        <p>you need to enter the value to interact with <span [class.is-awesome]=\"agreement.value==='iagree'\">{{name}}</span>....</p>\n        <input type=\"text\" #agreement (keyup)=\"0\">\n        <button [disabled]=\"agreement.value!=='iagree'\">I Agree</button>\n        <hr>\n        <test-tag></test-tag>\n    ",
                        styleUrls: ['./src/css/main.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], secondComponent);
                return secondComponent;
            }());
            exports_1("secondComponent", secondComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUFBO29CQUNJLFNBQUksR0FBRyxNQUFNLENBQUM7Z0JBS2xCLENBQUM7Z0JBSEcsa0NBQVEsR0FBUjtvQkFDSSx1QkFBdUI7Z0JBQzNCLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFDLCtjQU9SO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNqQyxVQUFVLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOzttQ0FBQTtnQkFTRixzQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsNkNBTUMsQ0FBQSIsImZpbGUiOiJzZWNvbmQtY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LWNvbXBvbmVudCdcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidzZWNvbmQtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxoND5UaGlzIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJhZ3JlZW1lbnQudmFsdWU9PT0naWFncmVlJz8gJ3JlZCc6ICcnXCIgPk51Y2x1ZXM8L3NwYW4+IG9mZmVycyBtb3JlIGNvbXBvbmVudHMgdG8gb3VyIGVjb3N5c3RlbTwvaDQ+XG4gICAgICAgIDxwPnlvdSBuZWVkIHRvIGVudGVyIHRoZSB2YWx1ZSB0byBpbnRlcmFjdCB3aXRoIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImFncmVlbWVudC52YWx1ZT09PSdpYWdyZWUnXCI+e3tuYW1lfX08L3NwYW4+Li4uLjwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2FncmVlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJhZ3JlZW1lbnQudmFsdWUhPT0naWFncmVlJ1wiPkkgQWdyZWU8L2J1dHRvbj5cbiAgICAgICAgPGhyPlxuICAgICAgICA8dGVzdC10YWc+PC90ZXN0LXRhZz5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL3NyYy9jc3MvbWFpbi5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOltUZXN0Q29tcG9uZW50XVxufSlcblxuXG5leHBvcnQgY2xhc3Mgc2Vjb25kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuYW1lID0gU3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIC8vdGhpcy5uYW1lPSBcIlNoYW5rYXJcIjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
