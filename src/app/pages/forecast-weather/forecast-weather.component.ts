import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecastList } from 'src/app/shared/interfaces/weather-forecast-details.interface';
import { WeatherForcast, WeatherForcastAttribute, WeatherForcastAttributeLabels } from 'src/app/shared/models/weather-forecast.model';
import { LocationService } from 'src/app/shared/services/location.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import * as moment from 'moment';

@Component({
    selector: 'app-forecast-weather',
    templateUrl: './forecast-weather.component.html',
})

export class ForecastWeatherComponent implements OnInit {
    public currentWeather: any = <WeatherForcast>{};
    public weatherForcastAttribute: typeof WeatherForcastAttribute = WeatherForcastAttribute;
    public weatherForcastAttributeLabel: typeof WeatherForcastAttributeLabels = WeatherForcastAttributeLabels;
    public forecast: any = <any>{};
    public weatherforcastList: WeatherForecastList[] = [];
    public loadingData!: boolean;
    public city!: string;
    private lat!: any;
    private lon!: any;

    constructor(private locationrService: LocationService, public weatherService: WeatherService, public route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.lat = this.route.snapshot.queryParamMap.get('lat');
        this.lon = this.route.snapshot.queryParamMap.get('long');
        this.getWeatherForcast();
        this.searchWeather();
    }

    // Get your location by geolocation
    public getWeatherForcast(): void {
        this.loadingData = true;
        if (!this.city) {
            this.locationrService.getByGeoLocation().subscribe({
                next: (result: any) => {
                    this.loadingData = false;
                    return this.futureForecast(result.list);
                },
                error: (_err) => {
                    this.loadingData = false;
                    console.error(_err);
                },
            });
        }
    }

    // Search weather with coords
    public searchWeather(): void {
        this.currentWeather = {};
        this.weatherService.getWeatherDataBycoords(this.lat, this.lon).subscribe(
            (res) => {
                this.currentWeather = res;
            },
            (_err) => {
                if (_err.error && _err.error.message) {
                    alert(_err.error.message);
                    return;
                }
                alert('Failed to get weather.');
            },
        );
    }

    // This is to extract the next four days data
    public futureForecast(data: WeatherForecastList[]) {
        data.forEach(x => {
            x.dt_txt = moment(x.dt_txt, 'YYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
        })
        const groupData = this.groupBy(data, i => i.dt_txt)
        Object.keys(groupData).forEach((value, index) => {
            this.weatherforcastList.push(groupData[value][0])
        })
        this.weatherforcastList = this.weatherforcastList.slice(1, 5);

    }

    groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
        list.reduce((previous, currentItem) => {
            const group = getKey(currentItem);
            if (!previous[group]) previous[group] = [];
            previous[group].push(currentItem);
            return previous;
        }, {} as Record<K, T[]>);
}
