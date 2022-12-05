import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ForecastWeatherComponent } from './pages/forecast-weather/forecast-weather.component';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/current',
    pathMatch: 'full',
  },
  {
    path: 'current',
    component: HomePageComponent,
  },
  {
    path: 'four-days',
    component: ForecastWeatherComponent,
  },
  {
    path: 'city',
    component: SearchResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
