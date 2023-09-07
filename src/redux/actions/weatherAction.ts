import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/authReducer';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';

interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

export type WeatherActionTypes = FetchWeatherSuccessAction;

export interface WeatherData {
  // Define your weather data properties here
  temperature: number;
  description: string;
  // Add more properties as needed
}

export const fetchWeatherSuccess = (weatherData: WeatherData): FetchWeatherSuccessAction => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

// Async action for fetching weather
export const fetchWeather = (
  location: string
): ThunkAction<void, RootState, null, WeatherActionTypes> => async (dispatch: Dispatch) => {
  try {
    // Perform API request and get weatherData
    const response = await axios.get<WeatherData>(`http://localhost:9000/weather/${location}`);
    dispatch(fetchWeatherSuccess(response.data));
  } catch (error) {
    // Handle weather data fetch error
    console.error('Error fetching weather data:', error);
  }
};
