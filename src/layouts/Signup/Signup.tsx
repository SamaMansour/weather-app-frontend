import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { signup } from '../../redux/actions/authAction';
const Signup: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSignup = () => {
    console.log(formData);
    dispatch(signup(formData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={4} width="300px">
        <Text fontSize="40px" fontWeight="normal" textAlign="left" mb={6} fontFamily="Roboto">
          Signup
        </Text>
        <FormControl id="username">
          <Input
            type="text"
            placeholder="Username"
            w="497px"
            h="54px"
            borderRadius="0"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Password"
            w="497px"
            h="54px"
            borderRadius="0"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Stack direction="row" alignItems="right" style={{ position: 'relative', left: '122%' }}>
          <Button
            type="button"
            bgColor="#000000"
            p="2"
            w="136px"
            h="54px"
            color="#FFFFFF"
            textAlign="left"
            borderRadius="0"
            onClick={handleSignup}
          >
            Signup
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Signup;
