import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { login } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSignup = () => {
    console.log(formData);
    dispatch(login(formData));
    navigate("/")
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
          Login
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
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
