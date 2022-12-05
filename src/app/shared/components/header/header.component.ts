import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FOUR_DAY_WEATHER_TITLE } from '../../constants/weather-data.constants';
import { WeatherForecastList } from '../../interfaces/weather-forecast-details.interface';
import { WeatherForcastAttribute, WeatherForcastAttributeLabels } from '../../models/weather-forecast.model';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentWeather: any = <any>{};
  public weatherForcastAttribute: typeof WeatherForcastAttribute = WeatherForcastAttribute;
  public weatherForcastAttributeLabel: typeof WeatherForcastAttributeLabels = WeatherForcastAttributeLabels;
  public forecastPageTitle: string = FOUR_DAY_WEATHER_TITLE;
  public weatherforcastList: WeatherForecastList[] = [];
  public fourDaysTitle: string = FOUR_DAY_WEATHER_TITLE;
  public forecast: any = <any>{};
  public loadingData!: boolean;
  public city!: any;
  private lat!: any;
  private lon!: any;

  constructor(private locationrService: LocationService, public weatherService: WeatherService, public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.lat = this.route.snapshot.queryParamMap.get('lat');
    this.lon = this.route.snapshot.queryParamMap.get('long');
    this.searchWeather();
  }

  public searchWeather() {
    this.currentWeather = {};
    this.weatherService.getWeatherDataBycoords(this.lat, this.lon).subscribe(
      (res) => {
        this.currentWeather = res;
        console.log('CONE ', this.currentWeather);
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
}
