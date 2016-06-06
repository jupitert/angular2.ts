System.register(['@angular/core', './highlight.directive', './structural-directive.component', "./margin.directive"], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1, structural_directive_component_1, margin_directive_1;
    var AtrributeDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (structural_directive_component_1_1) {
                structural_directive_component_1 = structural_directive_component_1_1;
            },
            function (margin_directive_1_1) {
                margin_directive_1 = margin_directive_1_1;
            }],
        execute: function() {
            AtrributeDirectiveComponent = (function () {
                function AtrributeDirectiveComponent() {
                }
                AtrributeDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-custom-directive',
                        template: "\n           <div myHighlight [changeColor]=\"'blue'\"> Highlight Me</div>\n           <div myMargin >Margin Me</div>\n            <my-structural-directives></my-structural-directives>\n        ",
                        directives: [highlight_directive_1.HighlightDirective, structural_directive_component_1.StructuralDirectives, margin_directive_1.MarginDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AtrributeDirectiveComponent);
                return AtrributeDirectiveComponent;
            }());
            exports_1("AtrributeDirectiveComponent", AtrributeDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFaRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNILFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSxvTUFJVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQyx3Q0FBa0IsRUFBRSxxREFBb0IsRUFBRSxrQ0FBZSxDQUFDO3FCQUM3RSxDQUFDOzsrQ0FBQTtnQkFJRixrQ0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscUVBRUMsQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGUtZGlyZWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc30gZnJvbSAnLi9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZS5jb21wb25lbnQnXG5pbXBvcnQge01hcmdpbkRpcmVjdGl2ZX0gZnJvbSBcIi4vbWFyZ2luLmRpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdteS1jdXN0b20tZGlyZWN0aXZlJyxcbiAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgPGRpdiBteUhpZ2hsaWdodCBbY2hhbmdlQ29sb3JdPVwiJ2JsdWUnXCI+IEhpZ2hsaWdodCBNZTwvZGl2PlxuICAgICAgICAgICA8ZGl2IG15TWFyZ2luID5NYXJnaW4gTWU8L2Rpdj5cbiAgICAgICAgICAgIDxteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+PC9teS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+XG4gICAgICAgIGAsXG4gICAgICAgIGRpcmVjdGl2ZXM6W0hpZ2hsaWdodERpcmVjdGl2ZSwgU3RydWN0dXJhbERpcmVjdGl2ZXMsIE1hcmdpbkRpcmVjdGl2ZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdHJyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnR7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
