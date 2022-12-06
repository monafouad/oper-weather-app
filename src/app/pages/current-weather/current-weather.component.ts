import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { WeatherImagesPipe } from 'src/app/shared/pipes/weather-images.pipe.ts.pipe';
import { WeatherForcast, WeatherForcastAttribute, WeatherForcastAttributeLabels } from 'src/app/shared/models/weather-forecast.model';
import { GO_TO_FORECAST } from 'src/app/shared/constants/weather-data.constants';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  public currentWeather: any = <WeatherForcast>{};
  public loadingData: boolean = false;
  public loc$: Observable<string>;
  public buttonTxt: string = GO_TO_FORECAST;
  public loc!: string;
  public weatherAttribute = new WeatherForcast();
  public weatherForcastAttribute: typeof WeatherForcastAttribute = WeatherForcastAttribute;
  public weatherForcastAttributeLabel: typeof WeatherForcastAttributeLabels = WeatherForcastAttributeLabels;
  public timeline: any[] = [];
  public imagesWeather: any;
  public spinner$: Observable<boolean> | undefined;
  private lat!: number;
  private lon!: number;
  constructor(
    private store: Store<any>,
    private weatherService: WeatherService,
    public weatherImagesPipe: WeatherImagesPipe,
    public router: Router
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
      this.searchWeather(loc);
    });
  }

  public ngOnInit(): void {
    this.loadingData = true;
    this.searchWeather(this.loc);
    this.getCurrentLocation();
  }

  public searchWeather(loc: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc).subscribe(
      (res) => {
        this.currentWeather = res;
        this.loadingData = false;
      },
      (err) => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          return;
        }
        alert('Failed to get weather.');
      },
      () => {}
    );
  }

      // Returns search form results
  public resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }

      // Geolocation by coordinates
  public getCurrentLocation() {
    if (!this.loc) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getLocationByCoords);
      } else {
        console.log('no data ');
      }
    }
  }


    // Geolocation by coordinates
  public getLocationByCoords = (position: GeolocationPosition): void => {
    this.lat = position.coords.latitude;
    this.lon = position.coords.longitude;
    this.weatherService.getWeatherDataBycoords(this.lat, this.lon).subscribe(
      (data: any) => {
        this.loadingData = false;
        this.currentWeather = data;
      },
      (err) => {
        console.log(err);
        this.loadingData = false;
      }
    );
  };

  // If not using the search form then send to foru-days page
  public openWetherForcast(): void {
    if (this.loc) {
      this.router.navigateByUrl(`/city?city=${this.loc}`);
    } else {
      this.router.navigateByUrl(`/four-days?lat=${this.lat}&long=${this.lon}`);
    }
  }
}
