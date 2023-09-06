
import { FETCH_WEATHER_SUCCESS, WeatherData, FetchWeatherSuccessAction } from '../types/weatherTypes';

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action: FetchWeatherSuccessAction): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default weatherReducer;

export type RootState = ReturnType<typeof weatherReducer>;
