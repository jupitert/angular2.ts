System.register(['@angular/core', './propert-binding.component'], function(exports_1, context_1) {
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
    var core_1, propert_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (propert_binding_component_1_1) {
                propert_binding_component_1 = propert_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    // name= 'Nuclei';
                    // values= "";
                    // testCall(){
                    //     return 1 === 1;
                    // }
                    // onKeyUp(val: string){
                    //     this.values += val + '|';
                    // }
                    this.name = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section class=\"parent\">\n            <h2>This is the parent component</h2>\n            <p>Please enter your name below</p>\n            Name: <input type=\"text\" [(ngModel)]=\"name\">\n            Age: <input type=\"text\" [(ngModel)]=\"age\">\n            <br><br>\n     \n            <section class=\"child\">\n                <data-bind [myName]=\"name\" [myAge]=\"age\" (hobbiesChanged)=\"hobbies = $event\" (qualifyChanges)=\"qualification = $event\"></data-bind>\n              \n            </section>\n             <h2>My Hobbies are: {{hobbies}} {{qualification}}</h2>\n        </section>\n        \n    ",
                        directives: [propert_binding_component_1.PropertyBinding]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1wMmMtYzJwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFDSSxrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxzQkFBc0I7b0JBQ3RCLElBQUk7b0JBQ0osd0JBQXdCO29CQUN4QixnQ0FBZ0M7b0JBQ2hDLElBQUk7b0JBQ0osU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFFZCxDQUFDO2dCQS9CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxRQUFRO3dCQUNqQixRQUFRLEVBQUMsc25CQWVSO3dCQUNELFVBQVUsRUFBQyxDQUFDLDJDQUFlLENBQUM7cUJBQy9CLENBQUM7O2dDQUFBO2dCQVlGLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC1wMmMtYzJwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nfSBmcm9tICcuL3Byb3BlcnQtYmluZGluZy5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidteS1hcHAnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cbiAgICAgICAgICAgIDxoMj5UaGlzIGlzIHRoZSBwYXJlbnQgY29tcG9uZW50PC9oMj5cbiAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3VyIG5hbWUgYmVsb3c8L3A+XG4gICAgICAgICAgICBOYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIEFnZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhZ2VcIj5cbiAgICAgICAgICAgIDxicj48YnI+XG4gICAgIFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgIDxkYXRhLWJpbmQgW215TmFtZV09XCJuYW1lXCIgW215QWdlXT1cImFnZVwiIChob2JiaWVzQ2hhbmdlZCk9XCJob2JiaWVzID0gJGV2ZW50XCIgKHF1YWxpZnlDaGFuZ2VzKT1cInF1YWxpZmljYXRpb24gPSAkZXZlbnRcIj48L2RhdGEtYmluZD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgPGgyPk15IEhvYmJpZXMgYXJlOiB7e2hvYmJpZXN9fSB7e3F1YWxpZmljYXRpb259fTwvaDI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltQcm9wZXJ0eUJpbmRpbmddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgLy8gbmFtZT0gJ051Y2xlaSc7XG4gICAgLy8gdmFsdWVzPSBcIlwiO1xuICAgIC8vIHRlc3RDYWxsKCl7XG4gICAgLy8gICAgIHJldHVybiAxID09PSAxO1xuICAgIC8vIH1cbiAgICAvLyBvbktleVVwKHZhbDogc3RyaW5nKXtcbiAgICAvLyAgICAgdGhpcy52YWx1ZXMgKz0gdmFsICsgJ3wnO1xuICAgIC8vIH1cbiAgICBuYW1lID0gJyc7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
