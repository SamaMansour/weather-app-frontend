import React, { useState } from 'react';
import { Flex, Input, Box } from '@chakra-ui/react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEnterKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(`http://localhost:9000/weather/${location}`);
        const data = await response.json();

        if (response.ok) {
          // Extract weather data from the API response
          console.log("api", data)
          const weatherInfo: WeatherData = {
            city: data.data.name,
            day: new Date().toDateString(),
            forecast: data.data.weather[0].description,
            time: new Date().toLocaleTimeString(),
            temperature: (data.data.main.temp- 32) * 5/9 ,
            iconUrl: `https://openweathermap.org/img/w/${data.data.weather[0].icon}.png`,
          };

          // Update the state with the weather data
          setWeatherData(weatherInfo);
          setError(null); // Clear any previous errors
        } else {
          setError('Failed to fetch weather data'); // Handle non-200 status codes
          setWeatherData(null); // Clear any previous weather data
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('An error occurred'); // Handle network or other errors
        setWeatherData(null); // Clear any previous weather data
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
        {/* Conditionally render the WeatherCard or error message */}
        {error ? (
          <div>{error}</div>
        ) : (
          weatherData && (
            <WeatherCard
              city={weatherData.city}
              day={weatherData.day}
              time={weatherData.time}
              forecast={weatherData.forecast}
              temperature={weatherData.temperature}
              iconUrl={weatherData.iconUrl}
            />
          )
        )}
      </Box>
    </Flex>
  );
};

export default Home;

// Define the WeatherData interface
interface WeatherData {
  city: string;
  day: string;
  forecast: string;
  time: string;
  temperature: number;
  iconUrl: string;
}
