import { Injectable } from '@angular/core';

import { FORECAST_KEY, FORECAST_ROOT } from '../constants/constants';

@Injectable()

export class WeatherService { 
    getCurrentLocation(): [number, number] {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude); // TODO: REMOVE
                return [pos.coords.latitude, pos.coords.longitude]
            },
            err => console.error("Unable to get the position - ", err));
        } else {
            console.error("Geolocation not available");
            return [0, 0]
        }
    }
 }