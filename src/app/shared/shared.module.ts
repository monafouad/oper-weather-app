import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routes } from '../app-routing.module';
import { WeatherService } from './services/weather.service';
import { AppComponent } from '../app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherImagesPipe } from './pipes/weather-images.pipe.ts.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ForecastWeatherComponent } from '../pages/forecast-weather/forecast-weather.component';
import { CurrentWeatherComponent } from '../pages/current-weather/current-weather.component';
import { HomePageComponent } from '../pages/homepage/home-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchResultsComponent } from '../pages/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SearchComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    HomePageComponent,
    WeatherImagesPipe,
    DateFormatPipe,
    SearchResultsComponent,
    SpinnerComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [],
  providers: [WeatherImagesPipe, DateFormatPipe, WeatherService],
  bootstrap: [AppComponent],
})
export class SharedModule {
  static RouterModule: any;
}
