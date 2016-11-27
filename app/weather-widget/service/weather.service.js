"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var constants_1 = require('../constants/constants');
var WeatherService = (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
    }
    WeatherService.prototype.getCurrentLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude); // TODO: REMOVE
                return [pos.coords.latitude, pos.coords.longitude];
            }, function (err) { return console.error("Unable to get the position - ", err); });
        }
        else {
            console.error("Geolocation not available");
            return [0, 0];
        }
    };
    WeatherService.prototype.getCurrentWeather = function (lat, long) {
        var url = constants_1.FORECAST_ROOT + constants_1.FORECAST_KEY + "/" + lat + "," + long;
        var queryParams = "?callback=JSONP_CALLBACK";
        return this.jsonp.get(url + queryParams)
            .map(function (data) { return data.json(); })
            .catch(function (err) {
            console.error("Unable to get weather data = ", err);
            return Observable_1.Observable.throw(err.json());
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map