import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImagesPipe',
})
export class WeatherImagesPipe implements PipeTransform {
  static StoreModule: any;
  transform(state: string): string {
    let imagesWeather!: string;

    switch (state) {
      case 'Rain': {
        imagesWeather = './assets/images/icons/rain.svg';
        break;
      }

      case 'Drizzle': {
        imagesWeather = './assets/images/icons/rain.svg';
        break;
      }

      case 'Mist': {
        imagesWeather = './assets/images/icons/clouds.svg';
        break;
      }

      case 'Clouds': {
        imagesWeather = './assets/images/icons/clouds.svg';
        break;
      }

      case 'Sunny' || 'Clear': {
        imagesWeather = './assets/images/icons/sun.svg';
        break;
      }

      case 'Storm' || 'Thunderstorm': {
        imagesWeather = './assets/images/icons/thunder.svg';
        break;
      }

      case 'Snow' || 'Hail': {
        imagesWeather = './assets/images/icons/snow.svg';
        break;
      }

      case 'Haze' || 'Fog': {
        imagesWeather = './assets/images/icons/clouds.svg';
        break;
      }
      default:
        imagesWeather = './assets/images/icons/clouds.svg';
        break;
    }

    return imagesWeather;
  }
}
