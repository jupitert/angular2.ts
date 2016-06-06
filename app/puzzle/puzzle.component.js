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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'nucleus-puzzle',
                        template: "\n        <section class=\"name-holder\">\n            Please enter your name\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section class=\"puzzle-holder\" \n        [ngClass]=\"{puzzle: true,\n                    solved: switch1.value == switch1Number \n                    && switch2.value == switch2Number \n                    && switch3.value == switch3Number \n                    && switch4.value == switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === ''? 'none':'block'}\" >\n            <h2>Nucleus Puzzle |\n            {{switch1.value == switch1Number \n                    && switch2.value == switch2Number \n                    && switch3.value == switch3Number \n                    && switch4.value == switch4Number ? 'Solved': 'Not Solved'}}\n            </h2>\n            <p>Welcome to the game, <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1\n            <input type=\"text\" #switch1 (keyup)=\"0\">\n            <br>\n            Switch 2\n            <input type=\"text\" #switch2 (keyup)=\"0\">\n            <br>\n            Switch 3 \n            <input type=\"text\" #switch3 (keyup)=\"0\">\n            <br>\n            Switch 4 \n            <input type=\"text\" #switch4 (keyup)=\"0\">\n        </section>\n        <h2 [hidden]=\" switch1.value != switch1Number \n                    || switch2.value != switch2Number \n                    || switch3.value != switch3Number \n                    || switch4.value != switch4Number\">Congratulations {{name.value}}, you have made it!!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkNBO2dCQUFBO2dCQWNBLENBQUM7Z0JBUkcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUU5RixDQUFDO2dCQXhETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQ3pCLFFBQVEsRUFBQyx3bERBcUNSO3FCQUNKLENBQUM7O21DQUFBO2dCQWlCRixzQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkNBY0MsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J251Y2xldXMtcHV6emxlJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibmFtZS1ob2xkZXJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIG5hbWVcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwdXp6bGUtaG9sZGVyXCIgXG4gICAgICAgIFtuZ0NsYXNzXT1cIntwdXp6bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyIFxuICAgICAgICAgICAgICAgICAgICAmJiBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgXG4gICAgICAgICAgICAgICAgICAgICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciBcbiAgICAgICAgICAgICAgICAgICAgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICAgIH1cIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJyc/ICdub25lJzonYmxvY2snfVwiID5cbiAgICAgICAgICAgIDxoMj5OdWNsZXVzIFB1enpsZSB8XG4gICAgICAgICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciBcbiAgICAgICAgICAgICAgICAgICAgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyIFxuICAgICAgICAgICAgICAgICAgICAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgXG4gICAgICAgICAgICAgICAgICAgICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/ICdTb2x2ZWQnOiAnTm90IFNvbHZlZCd9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPldlbGNvbWUgdG8gdGhlIGdhbWUsIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIFN3aXRjaCAxXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgU3dpdGNoIDJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMyBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBTd2l0Y2ggNCBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwiIHN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bWJlciBcbiAgICAgICAgICAgICAgICAgICAgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIFxuICAgICAgICAgICAgICAgICAgICB8fCBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgXG4gICAgICAgICAgICAgICAgICAgIHx8IHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bWJlclwiPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGhhdmUgbWFkZSBpdCEhPC9oMj5cbiAgICBgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgc3dpdGNoMU51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDJOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoNE51bWJlcjogbnVtYmVyO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDJOdW1iZXI9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlcj0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlcix0aGlzLnN3aXRjaDNOdW1iZXIsdGhpcy5zd2l0Y2g0TnVtYmVyKTtcblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
