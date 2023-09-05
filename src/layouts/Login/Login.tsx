import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >  
      <Stack spacing={4} width="300px">
        <Text fontSize="40px" fontWeight="normal" textAlign="left" mb={6} fontFamily="Roboto">
          Login
        </Text>
        <FormControl id="username">
          <Input type="text" placeholder="Username" w="497px" h="54px" />
        </FormControl>
        <FormControl id="password">
          <Input type="password" placeholder="Password" w="497px" h="54px"  /> 
        </FormControl>
        <Stack direction="row" alignItems="right" style={{position:"relative", left:"122%"}}>
          <Button type="submit" bgColor="#000000" p="2" w="136px" h="54px" color="#FFFFFF" textAlign="left">
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
