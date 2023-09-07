import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";


function Navbar() {
  
  const [currentUser, setCurrentUser] = useState(null); // to store the logged-in user

  
  return (
    <Box bg="#000000" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Link href="/" fontWeight="bold" fontSize="lg">
          Weather App
        </Link>
        <Spacer />
        <Link href="/about" mx={2}>
          About
        </Link>
        <Link href="/contact" mx={2}>
          Contact
        </Link>
        {localStorage.getItem("token") != null ? (
          <>
          <Link href="/logout" mx={2}>
          Logout
          </Link>
          </>
        ) : (
        <>
        <Link href="/login" mx={2}>
          Login
        </Link>
        <Link href="/signup" mx={2}>
          Signup
        </Link>
        </>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;