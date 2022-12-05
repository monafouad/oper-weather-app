import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY, CURRENT_WEATHER_URL_SUFFIX } from '../constants/weather-data.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
    constructor(private http: HttpClient) { }

  public getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=metric&appid=${API_KEY}`);
  }

  public getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&units=metric&appid=${API_KEY}`);
  }

  public getWeatherDataBycoords(lat: number, lon: number) {
    const params = new HttpParams().set('lat', lat).set('lon', lon).set('units', 'metric').set('appid', API_KEY);

      return this.http.get(CURRENT_WEATHER_URL_SUFFIX, { params });
  }

  public dateRange() {
    const start: Date = new Date();
      const to = new Date(start);

    to.setHours(to.getHours() + 2, to.getMinutes() + 59, to.getMinutes() + 59);

      return { start, to };
  }
}
