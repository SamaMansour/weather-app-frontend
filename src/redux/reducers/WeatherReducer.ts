interface WeatherState {
    loading: boolean;
    weather: any;  
    error: string;
  }
  
  interface FetchWeatherRequestAction {
    type: typeof FETCH_WEATHER_REQUEST;
  }
  
  interface FetchWeatherSuccessAction {
    type: typeof FETCH_WEATHER_SUCCESS;
    payload: any;  
  }
  
  interface FetchWeatherFailureAction {
    type: typeof FETCH_WEATHER_FAILURE;
    payload: string;
  }
  
  type WeatherActionTypes = FetchWeatherRequestAction | FetchWeatherSuccessAction | FetchWeatherFailureAction;
  
  import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../types/weatherTypes';
  
  const initialState: WeatherState = {
    loading: false,
    weather: null,
    error: ''
  };
  
  export default function weatherReducer(state = initialState, action: WeatherActionTypes): WeatherState {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          loading: false,
          weather: action.payload,
          error: ''
        };
      case FETCH_WEATHER_FAILURE:
        return {
          loading: false,
          weather: null,
          error: action.payload
        };
      default:
        return state;
    }
  }