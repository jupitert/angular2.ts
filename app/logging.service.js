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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                    this._lastmessage = '';
                }
                LoggingService.prototype.log = function (name) {
                    console.log('Current Message: ' + name + ' Previous Message: ' + this._lastmessage);
                    this._lastmessage = name;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNZLGlCQUFZLEdBQUUsRUFBRSxDQUFDO2dCQU83QixDQUFDO2dCQUxHLDRCQUFHLEdBQUgsVUFBSSxJQUFXO29CQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxHQUFFLHFCQUFxQixHQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDaEYsSUFBSSxDQUFDLFlBQVksR0FBRSxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBUEw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBU2IscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDJDQVFDLENBQUEiLCJmaWxlIjoibG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2V7XG4gICAgcHJpdmF0ZSBfbGFzdG1lc3NhZ2U9ICcnO1xuXG4gICAgbG9nKG5hbWU6c3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgTWVzc2FnZTogJytuYW1lKyAnIFByZXZpb3VzIE1lc3NhZ2U6ICcrIHRoaXMuX2xhc3RtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fbGFzdG1lc3NhZ2U9IG5hbWU7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
