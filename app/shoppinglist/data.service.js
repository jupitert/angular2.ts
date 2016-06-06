System.register(["@angular/core"], function(exports_1, context_1) {
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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['Summer', 'Winter', 'autumn', 'spring'];
                }
                DataService.prototype.randomise = function () {
                    var rndNum = Math.round(Math.random() * this._data.length);
                    console.log(rndNum);
                    return this._data[rndNum];
                };
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC9kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtvQkFDWSxVQUFLLEdBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFZM0QsQ0FBQztnQkFWRywrQkFBUyxHQUFUO29CQUNJLElBQUksTUFBTSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFhO29CQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFaTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFjYixrQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQscUNBYUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZ2xpc3QvZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2V7XG4gICAgcHJpdmF0ZSBfZGF0YT1bJ1N1bW1lcicsICdXaW50ZXInLCAnYXV0dW1uJywgJ3NwcmluZyddO1xuXG4gICAgcmFuZG9taXNlKCl7XG4gICAgICAgIGxldCBybmROdW09IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSogdGhpcy5fZGF0YS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhybmROdW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtybmROdW1dO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
