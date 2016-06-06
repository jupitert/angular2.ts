System.register(['@angular/core', "@angular/compiler/src/facade/async"], function(exports_1, context_1) {
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
    var core_1, async_1;
    var ShoppingListEditItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            ShoppingListEditItem = (function () {
                function ShoppingListEditItem() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new async_1.EventEmitter();
                }
                ShoppingListEditItem.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListEditItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-edit-item',
                        template: "\n                <div class=\"input\">\n                        <label for=\"item-name\">Name</label>\n                            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n                        <label for=\"item-amount\">Days</label>\n                            <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n                        <button class=\"danger\" (click)=\"onDelete()\">Delete</button>\n                </div>\n    ",
                        inputs: ['item'],
                        outputs: ['removed'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListEditItem);
                return ShoppingListEditItem;
            }());
            exports_1("ShoppingListEditItem", ShoppingListEditItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC9zaG9wcGluZy1saXN0LWVkaXQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7b0JBQzFCLFlBQU8sR0FBRSxJQUFJLG9CQUFZLEVBQVksQ0FBQztnQkFNMUMsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFyQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMseUJBQXlCO3dCQUNsQyxRQUFRLEVBQUMsZ2VBUVI7d0JBQ0QsTUFBTSxFQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNmLE9BQU8sRUFBQyxDQUFDLFNBQVMsQ0FBQztxQkFDdEIsQ0FBQzs7d0NBQUE7Z0JBVUYsMkJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVEQVFDLENBQUEiLCJmaWxlIjoic2hvcHBpbmdsaXN0L3Nob3BwaW5nLWxpc3QtZWRpdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2ZhY2FkZS9hc3luY1wiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonc2hvcHBpbmctbGlzdC1lZGl0LWl0ZW0nLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5EYXlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRhbmdlclwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBpbnB1dHM6WydpdGVtJ10sXG4gICAgb3V0cHV0czpbJ3JlbW92ZWQnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RFZGl0SXRlbSB7XG4gICAgaXRlbT0ge25hbWU6JycsIGFtb3VudDowfTtcbiAgICByZW1vdmVkPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVkLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
