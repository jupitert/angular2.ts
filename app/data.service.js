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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNZLFVBQUssR0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQVkzRCxDQUFDO2dCQVZHLCtCQUFTLEdBQVQ7b0JBQ0ksSUFBSSxNQUFNLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEtBQWE7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQVpMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWNiLGtCQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCxxQ0FhQyxDQUFBIiwiZmlsZSI6ImRhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNle1xuICAgIHByaXZhdGUgX2RhdGE9WydTdW1tZXInLCAnV2ludGVyJywgJ2F1dHVtbicsICdzcHJpbmcnXTtcblxuICAgIHJhbmRvbWlzZSgpe1xuICAgICAgICBsZXQgcm5kTnVtPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqIHRoaXMuX2RhdGEubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2cocm5kTnVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbcm5kTnVtXTtcbiAgICB9XG5cbiAgICBpbnNlcnQodmFsdWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
