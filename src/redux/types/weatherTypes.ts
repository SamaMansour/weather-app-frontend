// types/weatherTypes.ts

// Action Types
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Weather Data Type
export interface WeatherData {
  city: string;
  day: string;
  forecast: string;
  time: string;
  temperature: number;
  iconUrl: string;
}

// Action Types
export interface FetchWeatherRequestAction {
  type: typeof FETCH_WEATHER_REQUEST;
}

export interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

export interface FetchWeatherFailureAction {
  type: typeof FETCH_WEATHER_FAILURE;
  payload: string;
}

// Union type for all weather actions
export type WeatherAction =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
