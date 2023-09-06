import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../types/weatherTypes';

export const fetchWeather = (city: string) => (dispatch: Dispatch) => {
  dispatch(fetchWeatherRequest());
  
  axios.get(`http://localhost:9000?city=${city}`)
    .then(response => {
      dispatch(fetchWeatherSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchWeatherFailure(error.message));
    });
};

const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST
  };
};

const fetchWeatherSuccess = (weather: any) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
  };
};

const fetchWeatherFailure = (error: string) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error
  };
};