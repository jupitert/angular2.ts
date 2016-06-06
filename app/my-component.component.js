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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Shankar';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        <h1>Nuclues IO</h1>\n        <p>Hey The CEO name is <span [style.color]= \"awesomeness.value === 'yes' ?'red' : ''\">{{name}}</span>. this is my first component. is it awesome?\n        <br><br>\n        <span [class.is-awesome]=\"awesomeness.value==='yes'\">This is awesome...</span>\n        </p>\n        <input type=\"text\" #awesomeness (keyup)=\"0\">\n        <br><br>\n        <button [disabled]=\"awesomeness.value!=='yes'\">only enable if its yes</button>\n        \n    ",
                        styleUrls: ['./src/css/main.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLFNBQVMsQ0FBQTtnQkFDbEIsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsY0FBYzt3QkFDdkIsUUFBUSxFQUFDLDRlQVVSO3dCQUNELFNBQVMsRUFBQyxDQUFDLG9CQUFvQixDQUFDO3FCQUNuQyxDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8aDE+TnVjbHVlcyBJTzwvaDE+XG4gICAgICAgIDxwPkhleSBUaGUgQ0VPIG5hbWUgaXMgPHNwYW4gW3N0eWxlLmNvbG9yXT0gXCJhd2Vzb21lbmVzcy52YWx1ZSA9PT0gJ3llcycgPydyZWQnIDogJydcIj57e25hbWV9fTwvc3Bhbj4uIHRoaXMgaXMgbXkgZmlyc3QgY29tcG9uZW50LiBpcyBpdCBhd2Vzb21lP1xuICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJhd2Vzb21lbmVzcy52YWx1ZT09PSd5ZXMnXCI+VGhpcyBpcyBhd2Vzb21lLi4uPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNhd2Vzb21lbmVzcyAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJhd2Vzb21lbmVzcy52YWx1ZSE9PSd5ZXMnXCI+b25seSBlbmFibGUgaWYgaXRzIHllczwvYnV0dG9uPlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlVXJsczpbJy4vc3JjL2Nzcy9tYWluLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnR7XG4gICAgbmFtZT0nU2hhbmthcidcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
