import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FOUR_DAY_WEATHER_TITLE } from 'src/app/shared/constants/weather-data.constants';
import { WeatherForcastAttribute, WeatherForcastAttributeLabels, WeatherForcast} from 'src/app/shared/models/weather-forecast.model';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit {
  public weatherForcastAttribute: typeof WeatherForcastAttribute = WeatherForcastAttribute;
  public weatherForcastAttributeLabel: typeof WeatherForcastAttributeLabels = WeatherForcastAttributeLabels;
  public forecastPageTitle = FOUR_DAY_WEATHER_TITLE;
  public forecast: any = <WeatherForcast>{};
  public loadingData!: boolean;
  public city!: any;
  public currentWeather: any = <WeatherForcast>{};
  constructor(private store: Store<any>, private weatherService: WeatherService, public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.city = this.route.snapshot.queryParamMap.get('city');
    this.searchForecast(this.city);
  }

  public searchForecast(city: string) {
    this.weatherService.getForecast(city).subscribe(
      (res) => {
        this.forecast = res;
      },
      (_err) => { console.log(_err)}
    );
  }

  public resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }

  public searchWeather(loc: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc).subscribe(
      (res) => {
        this.currentWeather = res;
        console.log(this.currentWeather);
      },
      (_err) => { console.log(_err)}
    );
  }

}
