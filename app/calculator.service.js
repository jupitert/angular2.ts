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
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalculatorService = (function () {
                function CalculatorService() {
                }
                CalculatorService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService.prototype.divide = function (num1, num2) {
                    return num1 / num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            }());
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBO2dCQVlBLENBQUM7Z0JBWEcsK0JBQUcsR0FBSCxVQUFJLElBQWEsRUFBRSxJQUFZO29CQUMzQixNQUFNLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBYSxFQUFFLElBQVk7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELGtDQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsSUFBWTtvQkFDN0IsTUFBTSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBWkw7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBYWIsd0JBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELGlEQVlDLENBQUEiLCJmaWxlIjoiY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNle1xuICAgIGFkZChudW0xIDogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgICByZXR1cm4gbnVtMStudW0yO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG51bTEgOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgICAgIHJldHVybiBudW0xKm51bTI7XG4gICAgfVxuXG4gICAgZGl2aWRlKG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIG51bTEvbnVtMjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
