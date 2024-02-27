"use client";

import React, { useState } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { LockIcon, PhoneIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
export default function page() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"80vh"}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"500px"}
        minH={"400px"}
        bgColor={"orange.400"}
        gap={"30px"}
        borderRadius={"16px"}
      >
        <Text fontSize={30} fontWeight={700}>
          Giriş Yap
        </Text>
        <InputGroup w={"250px"} h={"50px"} fontSize={18} fontWeight={600}>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.400" />
          </InputLeftElement>
          <Input type="email" placeholder="E-mail" bgColor={"white"} />
        </InputGroup>
        <InputGroup w={"250px"} h={"50px"} fontSize={18} fontWeight={600}>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.400" />
          </InputLeftElement>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Password"
            bgColor={"white"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button w={"250px"} h={"50px"} fontSize={16} fontWeight={600}>
          Giriş Yap
        </Button>
        <Link href="/register" fontSize={14} fontWeight={700} color={"white"}>
          Üye olmak için tıklayın
        </Link>
      </Flex>
    </Flex>
  );
}
