System.register(['@angular/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Apple', 'Banana', 'Orange'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n         <!--for 1. ng if-->\n        <section class=\"directive\">\n            <h2>*ngIf</h2>\n            <div>\n                please enter a value which is greater than 10.\n                <input type=\"text\" #inputValue (keyup)=\"0\" >\n            </div>\n            <div *ngIf=\"inputValue.value >10\"><h1>Number is greater than 10</h1></div>\n        </section>\n        \n        \n        <!--for 2. ng for-->\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <ul>\n            <li *ngFor=\"let item of list, let i = index\">{{item}} {{i}}</li>\n            </ul>\n        </section>\n        \n        <!--for 3. ng switch-->\n        <section>\n            <h2>[ngSwitch]</h2>\n            <div>\n                Enter Red, blue or green? <br>\n                <input type=\"text\" #color (keyup)=\"0\">\n            </div>\n            <div [ngSwitch]=\"color.value\">\n                <template [ngSwitchWhen]=\"'blue'\"><span style=\"color:blue\">Color is Blue</span></template>\n                <template [ngSwitchWhen]=\"'green'\"><span style=\"color:green\">Color is Green</span></template>\n                <template [ngSwitchWhen]=\"'red'\"><span style=\"color:red\">Color is Red</span></template>\n                <template ngSwitchDefault><span>Dont know the color</span></template>\n            </div>\n        </section>\n        \n        \n        <!--4. my custom directive-->\n        <section class=\"directive\">\n            <h2>Custom Directive</h2>\n            \n            <div>\n                Enter true or False? <br>\n                <input type=\"text\" #custom (keyup)=\"0\">\n            </div>\n            \n            <div *myUnless=\"custom.value != 'false'\">\n                Only shown if false entered\n            </div>\n        </section>\n        \n    ",
                        directives: [unless_directive_1.UnlessDirective],
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTREQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQTNERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBQywwekRBa0RSO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBRWhDLENBQUM7O3dDQUFBO2dCQUlGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6InN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tICcuL3VubGVzcy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICAgPCEtLWZvciAxLiBuZyBpZi0tPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPipuZ0lmPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgcGxlYXNlIGVudGVyIGEgdmFsdWUgd2hpY2ggaXMgZ3JlYXRlciB0aGFuIDEwLlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dFZhbHVlIChrZXl1cCk9XCIwXCIgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5wdXRWYWx1ZS52YWx1ZSA+MTBcIj48aDE+TnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMDwvaDE+PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8IS0tZm9yIDIuIG5nIGZvci0tPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPipuZ0ZvcjwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdCwgbGV0IGkgPSBpbmRleFwiPnt7aXRlbX19IHt7aX19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDwhLS1mb3IgMy4gbmcgc3dpdGNoLS0+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgyPltuZ1N3aXRjaF08L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBFbnRlciBSZWQsIGJsdWUgb3IgZ3JlZW4/IDxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29sb3IudmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj48c3BhbiBzdHlsZT1cImNvbG9yOmJsdWVcIj5Db2xvciBpcyBCbHVlPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2dyZWVuJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIj5Db2xvciBpcyBHcmVlbjwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjpyZWRcIj5Db2xvciBpcyBSZWQ8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PjxzcGFuPkRvbnQga25vdyB0aGUgY29sb3I8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPCEtLTQuIG15IGN1c3RvbSBkaXJlY3RpdmUtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj5DdXN0b20gRGlyZWN0aXZlPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBFbnRlciB0cnVlIG9yIEZhbHNlPyA8YnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2N1c3RvbSAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgKm15VW5sZXNzPVwiY3VzdG9tLnZhbHVlICE9ICdmYWxzZSdcIj5cbiAgICAgICAgICAgICAgICBPbmx5IHNob3duIGlmIGZhbHNlIGVudGVyZWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1VubGVzc0RpcmVjdGl2ZV0sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlcyB7XG4gICAgbGlzdD1bJ0FwcGxlJywgJ0JhbmFuYScsICdPcmFuZ2UnXTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
