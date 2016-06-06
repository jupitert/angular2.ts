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
    var MarginDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MarginDirective = (function () {
                function MarginDirective(_eleRef, _renderer) {
                    this._eleRef = _eleRef;
                    this._renderer = _renderer;
                    this._defaultmargin = '10px';
                }
                MarginDirective.prototype.ngOnInit = function () {
                    this._renderer.setElementStyle(this._eleRef.nativeElement, 'margin', this._defaultmargin);
                };
                MarginDirective = __decorate([
                    core_1.Directive({
                        selector: '[myMargin]',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MarginDirective);
                return MarginDirective;
            }());
            exports_1("MarginDirective", MarginDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmdpbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFHSSx5QkFBb0IsT0FBbUIsRUFBVSxTQUFtQjtvQkFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUY1RCxtQkFBYyxHQUFFLE1BQU0sQ0FBQztnQkFJL0IsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzlGLENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTtxQkFDekIsQ0FBQzs7bUNBQUE7Z0JBY0Ysc0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELDZDQVdDLENBQUEiLCJmaWxlIjoibWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW215TWFyZ2luXScsXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBNYXJnaW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdG1hcmdpbj0gJzEwcHgnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbGVSZWYubmF0aXZlRWxlbWVudCwgJ21hcmdpbicsIHRoaXMuX2RlZmF1bHRtYXJnaW4pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
