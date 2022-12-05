import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { API_KEY, FORECAST_WEATHER_URL } from '../constants/weather-data.constants';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient, public weatherService: WeatherService) {}

  public getByGeoLocation(): Observable<any> {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition((position) => {
        observer.next(position);
      }),
        (error: any) => {
          observer.next(error);
        };
    }).pipe(
      map((value: any) => {
        return new HttpParams()
          .set('lat', value.coords.latitude)
          .set('lon', value.coords.longitude)
          .set('units', 'metric')
          .set('appid', API_KEY);
      }),
      switchMap((values: any) => {
        return this.http.get(FORECAST_WEATHER_URL, { params: values });
      })
    );
  }

  // public getCurrentLocation(): Promise<GeolocationCoordinates> {
  //   return new Promise((resolve, reject) => {
  //     let savedLocation = this.GetSavedLocation();
  //     if (savedLocation) {
  //       resolve(savedLocation)
  //       return;
  //     }
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const coords: GeolocationCoordinates = {
  //           accuracy: position.coords.accuracy,
  //           altitude: position.coords.altitude,
  //           altitudeAccuracy: position.coords.altitudeAccuracy,
  //           heading: position.coords.heading,
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           speed: position.coords.speed,
  //         }
  //         Object.assign(coords, position.coords);
  //         const mObj = { timeStamp: moment().format(`YYYY-MM-DD hh:mm A`) , coords }

  //         localStorage.setItem('mLocation', JSON.stringify(mObj));
  //         resolve(position.coords);
  //       }, (error) => {
  //         reject(error)
  //       })
  //     } else {
  //       reject('Navigator not found')
  //     }
  //   })
  // }

  // private GetSavedLocation() {
  //   if (!localStorage.getItem('mLocation')) {
  //     return null
  //   }
  //   const { timeStamp , coords } = JSON.parse(localStorage.getItem('mLocation') || '');
  //   const previous = moment(timeStamp , `YYYY-MM-DD hh:mm A`);
  //   const current = moment();
  //   const diff =  current.diff(previous, 'hours');
  //   if (diff > 6) {
  //     return null;
  //   } else {
  //     return coords as GeolocationCoordinates
  //   }
  // }
}
