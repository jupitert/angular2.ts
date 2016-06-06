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
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                // to catch template reference- that's the content inbetween the element
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    //now setting the input we got from the input and executing the function..
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless'],
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSx3RUFBd0U7Z0JBRXhFLHlCQUFvQixZQUF5QixFQUFVLGlCQUFtQztvQkFBdEUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtnQkFFMUYsQ0FBQztnQkFHRCxzQkFBSSxxQ0FBUTtvQkFEWiwwRUFBMEU7eUJBQzFFLFVBQWEsU0FBbUI7d0JBQzVCLEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQzs0QkFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNqRSxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDbkMsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLE1BQU0sRUFBQyxDQUFDLFVBQVUsQ0FBQztxQkFDdEIsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCw2Q0FpQkMsQ0FBQSIsImZpbGUiOiJ1bmxlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3IgOidbbXlVbmxlc3NdJyxcbiAgICBpbnB1dHM6WydteVVubGVzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFVubGVzc0RpcmVjdGl2ZXtcblxuICAgIC8vIHRvIGNhdGNoIHRlbXBsYXRlIHJlZmVyZW5jZS0gdGhhdCdzIHRoZSBjb250ZW50IGluYmV0d2VlbiB0aGUgZWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKXtcblxuICAgIH1cblxuICAgIC8vbm93IHNldHRpbmcgdGhlIGlucHV0IHdlIGdvdCBmcm9tIHRoZSBpbnB1dCBhbmQgZXhlY3V0aW5nIHRoZSBmdW5jdGlvbi4uXG4gICAgc2V0IG15VW5sZXNzKGNvbmRpdGlvbiA6IGJvb2xlYW4pe1xuICAgICAgICBpZighY29uZGl0aW9uKXtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
