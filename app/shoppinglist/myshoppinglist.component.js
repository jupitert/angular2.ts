System.register(['@angular/core', "./shopping-list-new-item.component", "./shopping-list-edit-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_edit_item_component_1;
    var MyShoppingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_edit_item_component_1_1) {
                shopping_list_edit_item_component_1 = shopping_list_edit_item_component_1_1;
            }],
        execute: function() {
            MyShoppingComponent = (function () {
                function MyShoppingComponent() {
                    this.myList = new Array();
                }
                MyShoppingComponent.prototype.onItemAdded = function (item) {
                    this.myList.push({ name: item.name, amount: item.amount });
                };
                ;
                MyShoppingComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                    console.log(this.selectedItem);
                };
                MyShoppingComponent.prototype.update = function (item) {
                    this.myList.splice(this.myList.indexOf(item), 1);
                    this.selectedItem = null;
                };
                MyShoppingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list',
                        template: "\n                <section>\n                        <h2>New Projetcs</h2>\n                        <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n                </section>\n                <section>\n                    <h2>My List</h2>\n                    <ul>\n                        <li *ngFor=\"let item of myList\" (click)=\"onSelect(item)\">\n                            {{item.name | uppercase}} ({{item.amount}})\n                        </li>\n                    </ul>\n                </section>\n                <section *ngIf=\"selectedItem != null\">\n                        <h2>Edit Project test</h2>\n                        <shopping-list-edit-item [item]=\"selectedItem\" (removed)=\"update($event)\"></shopping-list-edit-item>\n                </section>\n            \n            ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItem, shopping_list_edit_item_component_1.ShoppingListEditItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyShoppingComponent);
                return MyShoppingComponent;
            }());
            exports_1("MyShoppingComponent", MyShoppingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC9teXNob3BwaW5nbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7b0JBRUksV0FBTSxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBa0JuQyxDQUFDO2dCQWRHLHlDQUFXLEdBQVgsVUFBWSxJQUFjO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtnQkFDM0QsQ0FBQzs7Z0JBRUQsc0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxvQ0FBTSxHQUFOLFVBQU8sSUFBYztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQTNDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBQyxnMUJBa0JBO3dCQUVELFVBQVUsRUFBQyxDQUFDLHNEQUFtQixFQUFFLHdEQUFvQixDQUFDO3FCQUNqRSxDQUFDOzt1Q0FBQTtnQkFzQkYsMEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFEQW9CQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nbGlzdC9teXNob3BwaW5nbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW19IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRJdGVtfSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWVkaXQtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LXNob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5OZXcgUHJvamV0Y3M8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPk15IExpc3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbXlMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLm5hbWUgfCB1cHBlcmNhc2V9fSAoe3tpdGVtLmFtb3VudH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0gIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVkaXQgUHJvamVjdCB0ZXN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LWVkaXQtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJ1cGRhdGUoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1lZGl0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgLFxuXG4gICAgICAgICAgICBkaXJlY3RpdmVzOltTaG9wcGluZ0xpc3ROZXdJdGVtLCBTaG9wcGluZ0xpc3RFZGl0SXRlbV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeVNob3BwaW5nQ29tcG9uZW50IHtcblxuICAgIG15TGlzdCA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xuXG5cbiAgICBvbkl0ZW1BZGRlZChpdGVtOiBMaXN0SXRlbSl7XG4gICAgICAgIHRoaXMubXlMaXN0LnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50Oml0ZW0uYW1vdW50fSlcbiAgICB9O1xuXG4gICAgb25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbT0gaXRlbTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShpdGVtOiBMaXN0SXRlbSl7XG4gICAgICAgIHRoaXMubXlMaXN0LnNwbGljZSh0aGlzLm15TGlzdC5pbmRleE9mKGl0ZW0pLDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbT0gbnVsbDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
