import React from 'react';
import {
  Box,
  Flex,
  Input,
  Text,
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home = () => {
  const weatherData = {
    city: 'New York',
    day: 'Sunday',
    forecast:'smoke',
    time:'9:00 AM',
    temperature: 22,
    iconUrl: '../assets/svg/sunny.svg', // Replace with the actual path to your weather icon
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
        />
        <Box
          w="497px" // Set the width to match the Input component
          h="54px" // Set the height to match the Input component
        >
          <WeatherCard
            city={weatherData.city}
            day={weatherData.day}
            time={weatherData.time}
            forecast={weatherData.forecast}
            temperature={weatherData.temperature}
            iconUrl={weatherData.iconUrl}
          />
        </Box>
      </Flex>
  );
};

export default Home;
