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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = "green";
                    this._defaultPadding = "10px";
                }
                // ngOnInit():any{
                //     //this._elRef.nativeElement.style.background = this._defaultColor;
                //     this._renderer.setElementStyle(this._elRef.nativeElement, 'background', this. myBgColor || this._defaultColor);
                //     this._renderer.setElementStyle(this._elRef.nativeElement,'padding', this._defaultPadding);
                // }
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.myHighlights(this.changeColor || this._defaultColor);
                    //this._renderer.setElementStyle(this._elRef.nativeElement, 'background', );
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.myHighlights(null);
                    // this._renderer.setElementStyle(this._elRef.nativeElement, 'background', null);
                };
                HighlightDirective.prototype.myHighlights = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['changeColor'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFLSSw0QkFBcUIsTUFBa0IsRUFBVSxTQUFvQjtvQkFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO29CQUo3RCxrQkFBYSxHQUFFLE9BQU8sQ0FBQztvQkFDdkIsb0JBQWUsR0FBRSxNQUFNLENBQUM7Z0JBS2hDLENBQUM7Z0JBRUQsa0JBQWtCO2dCQUNsQix5RUFBeUU7Z0JBQ3pFLHNIQUFzSDtnQkFDdEgsaUdBQWlHO2dCQUNqRyxJQUFJO2dCQUVKLHlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsNEVBQTRFO2dCQUNoRixDQUFDO2dCQUVELHlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsaUZBQWlGO2dCQUNwRixDQUFDO2dCQUVPLHlDQUFZLEdBQXBCLFVBQXFCLEtBQUs7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFDLENBQUMsYUFBYSxDQUFDO3dCQUN0QixJQUFJLEVBQUU7NEJBQ04sY0FBYyxFQUFFLGdCQUFnQjs0QkFDaEMsY0FBYyxFQUFFLGdCQUFnQjt5QkFDL0I7cUJBQ0osQ0FBQzs7c0NBQUE7Z0JBK0JGLHlCQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCxtREE2QkMsQ0FBQSIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbXlIaWdobGlnaHRdJyxcbiAgICBpbnB1dHM6WydjaGFuZ2VDb2xvciddLFxuICAgIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmV7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbG9yPSBcImdyZWVuXCI7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFBhZGRpbmc9IFwiMTBweFwiO1xuICAgIHByaXZhdGUgY2hhbmdlQ29sb3IgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiAgUmVuZGVyZXIpe1xuXG4gICAgfVxuXG4gICAgLy8gbmdPbkluaXQoKTphbnl7XG4gICAgLy8gICAgIC8vdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgIC8vICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQnLCB0aGlzLiBteUJnQ29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcbiAgICAvLyAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsJ3BhZGRpbmcnLCB0aGlzLl9kZWZhdWx0UGFkZGluZyk7XG4gICAgLy8gfVxuXG4gICAgb25Nb3VzZUVudGVyKCl7XG4gICAgICAgIHRoaXMubXlIaWdobGlnaHRzKHRoaXMuY2hhbmdlQ29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcbiAgICAgICAgLy90aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQnLCApO1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZSgpe1xuICAgICAgICB0aGlzLm15SGlnaGxpZ2h0cyhudWxsKTtcbiAgICAgICAvLyB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQnLCBudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG15SGlnaGxpZ2h0cyhjb2xvcil7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZCcsIGNvbG9yKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
