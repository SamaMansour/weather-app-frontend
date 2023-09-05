import React, { FC } from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

interface WeatherCardProps {
  city: string;
  day: string;
  time: string;
  forecast: string;
  temperature: number;
  iconUrl: string;
}

const WeatherCard: FC<WeatherCardProps> = ({
  city,
  day,
  time,
  forecast,
  temperature,
  iconUrl,
}) => {
  return (
    <Flex
      w="497px"
      borderWidth="1px"
      borderRadius="0" 
      alignItems="center" 
      p={4}
      boxShadow="none" 
    >
      <Image src={iconUrl} alt="Weather Icon" boxSize="40px" mr={4} />
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="left">
          {city}
        </Text>
        <Text fontSize="md" mb={2}>
          {day} {time}
        </Text>
        <Text fontSize="md" mb={2} textAlign="left">
          {forecast}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" textAlign="left">
          {temperature}°C
        </Text>
      </Box>
    </Flex>
  );
};

export default WeatherCard;
