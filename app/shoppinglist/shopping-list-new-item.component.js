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
    var ShoppingListNewItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            ShoppingListNewItem = (function () {
                function ShoppingListNewItem() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new async_1.EventEmitter();
                }
                ShoppingListNewItem.prototype.onSubmit = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n                <div class=\"input\">\n                        <label for=\"item-name\">Name</label>\n                            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n                        <label for=\"item-amount\">Days</label>\n                            <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n                        <button (click)=\"onSubmit()\">Add</button>\n                </div>\n            ",
                        outputs: ['itemAdded'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItem);
                return ShoppingListNewItem;
            }());
            exports_1("ShoppingListNewItem", ShoppingListNewItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztvQkFDMUIsY0FBUyxHQUFFLElBQUksb0JBQVksRUFBWSxDQUFBO2dCQUszQyxDQUFDO2dCQUhHLHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBQyxvZEFRQTt3QkFDVCxPQUFPLEVBQUMsQ0FBQyxXQUFXLENBQUM7cUJBQ3hCLENBQUM7O3VDQUFBO2dCQVNGLDBCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxREFPQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nbGlzdC9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2ZhY2FkZS9hc3luY1wiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0nLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5EYXlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TdWJtaXQoKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCxcbiAgICBvdXRwdXRzOlsnaXRlbUFkZGVkJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0TmV3SXRlbXtcbiAgICBpdGVtPSB7bmFtZTonJywgYW1vdW50OjB9O1xuICAgIGl0ZW1BZGRlZD0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKVxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdGhpcy5pdGVtQWRkZWQuZW1pdCh0aGlzLml0ZW0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
