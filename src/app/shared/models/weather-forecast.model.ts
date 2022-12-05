import { ModelAttributeLabel } from '../interfaces/model-attribute-label.interface';
import {
  City,
  Clouds,
  MainWeatherDetails,
  Sys,
  Weather,
  WeatherForecastList,
  Wind,
} from '../interfaces/weather-forecast-details.interface';

export enum WeatherForcastAttribute {
  COD = 'cod',
  MESSAGE = 'message',
  CNT = 'cnt',
  LIST = 'list',
  CITY = 'city',
  TEMP = 'temp',
  FEELS_LIKE = 'feels_like',
  TEMP_MIN = 'temp_min',
  TEMP_MAX = 'temp_max',
  PRESSURE = 'pressure',
  SEALEVEL = 'sea_level',
  GROUND_LEVEL = 'grnd_level',
  HUMIDITY = 'humidity',
  TEMP_KF = 'temp_kf',
  DT = 'dt',
  MAIN = 'main',
  WEATHER = 'weather',
  CLOUDS = 'clouds',
  WIND = 'wind',
  VISIBILITY = 'visibility',
  POP = 'pop',
  SYS = 'sys',
  DT_TXT = 'dt_txt',
}

export const WeatherForcastAttributeLabels: ModelAttributeLabel = {
  [WeatherForcastAttribute.COD]: 'Cod',
  [WeatherForcastAttribute.MESSAGE]: 'Message',
  [WeatherForcastAttribute.CNT]: 'Cnt',
  [WeatherForcastAttribute.LIST]: 'List',
  [WeatherForcastAttribute.CITY]: 'City',
  [WeatherForcastAttribute.TEMP]: 'Temperature',
  [WeatherForcastAttribute.FEELS_LIKE]: 'Feels like',
  [WeatherForcastAttribute.TEMP_MIN]: 'Min',
  [WeatherForcastAttribute.TEMP_MAX]: 'Max',
  [WeatherForcastAttribute.SEALEVEL]: 'Sea Level',
  [WeatherForcastAttribute.GROUND_LEVEL]: 'Ground level',
  [WeatherForcastAttribute.PRESSURE]: 'Pressure',
  [WeatherForcastAttribute.HUMIDITY]: 'Humidity',
  [WeatherForcastAttribute.TEMP_KF]: 'Temp Kf',
  [WeatherForcastAttribute.DT]: 'DT',
  [WeatherForcastAttribute.MAIN]: 'Main',
  [WeatherForcastAttribute.WEATHER]: 'Weather',
  [WeatherForcastAttribute.CLOUDS]: 'Clouds',
  [WeatherForcastAttribute.WIND]: 'Wind',
  [WeatherForcastAttribute.VISIBILITY]: 'Visibility',
  [WeatherForcastAttribute.POP]: 'Pop',
  [WeatherForcastAttribute.SYS]: 'Sys',
  [WeatherForcastAttribute.DT_TXT]: 'Description',
};

export class WeatherForcast {
  public [WeatherForcastAttribute.COD]: string;
  public [WeatherForcastAttribute.MESSAGE]: number;
  public [WeatherForcastAttribute.CNT]: number;
  public [WeatherForcastAttribute.LIST]: WeatherForecastList[];
  public [WeatherForcastAttribute.CITY]: City;
  public [WeatherForcastAttribute.TEMP]: number;
  public [WeatherForcastAttribute.FEELS_LIKE]: number;
  public [WeatherForcastAttribute.TEMP_MIN]: number;
  public [WeatherForcastAttribute.TEMP_MAX]: number;
  public [WeatherForcastAttribute.SEALEVEL]: number;
  public [WeatherForcastAttribute.GROUND_LEVEL]: number;
  public [WeatherForcastAttribute.PRESSURE]: number;
  public [WeatherForcastAttribute.HUMIDITY]: number;
  public [WeatherForcastAttribute.TEMP_KF]: number;
  public [WeatherForcastAttribute.DT]: number;
  public [WeatherForcastAttribute.MAIN]: MainWeatherDetails;
  public [WeatherForcastAttribute.WEATHER]: Weather[];
  public [WeatherForcastAttribute.CLOUDS]: Clouds;
  public [WeatherForcastAttribute.WIND]: Wind;
  public [WeatherForcastAttribute.VISIBILITY]: number;
  public [WeatherForcastAttribute.POP]: number;
  public [WeatherForcastAttribute.SYS]: Sys;
  public [WeatherForcastAttribute.DT_TXT]: string;
}
