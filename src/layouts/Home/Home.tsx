import React, { useState } from 'react';
import { Box, Flex, Input } from '@chakra-ui/react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchWeather } from '../../redux/actions/weatherAction';
import { RootState } from '../../redux/reducers/WeatherReducer';

interface WeatherData {
  city: string;
  day: string;
  forecast: string;
  time: string;
  temperature: number;
  iconUrl: string;
}

const Home: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const weatherData = useSelector((state: RootState) => state.data); // Using useSelector to get weatherData from Redux store

  const handleEnterKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        // Dispatch an action to fetch weather data
        dispatch(fetchWeather(location));

        // You can update the weather data state in the Redux store
        // or set it here if you don't use Redux
        // const newWeatherData = await fetchWeatherData(location);
        // setWeatherData(newWeatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Input
        type="text"
        placeholder="Location"
        size="lg"
        w="497px"
        h="54px"
        borderRadius="0"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleEnterKeyPress}
      />
      <Box w="497px" h="54px">
        {/* Conditionally render the WeatherCard only if weatherData is not null */}
        {weatherData && (
          <WeatherCard
            city={weatherData.city}
            day={weatherData.day}
            time={weatherData.time}
            forecast={weatherData.forecast}
            temperature={weatherData.temperature}
            iconUrl={weatherData.iconUrl}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Home;
