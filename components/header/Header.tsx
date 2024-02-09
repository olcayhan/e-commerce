"use client";

import React from "react";
import Image from "next/image";
import user from "@assets/svg/user.svg";
import basket from "@assets/svg/basket.svg";
import { Box, Flex, Icon, Input, Link, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Flex
      direction={"row"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={5}
      pb={4}
    >
      <Link href="/" w={"100px"} h={"50px"} position={"relative"}>
        <Image src="" alt="header_logo" fill />
      </Link>
      <Box w={"600px"} h={"50px"} position={"relative"} zIndex={99}>
        <Icon
          as={SearchIcon}
          position={"absolute"}
          verticalAlign={"center"}
          top={"50%"}
          left={3}
          transform={"translateY(-50%)"}
          w={5}
          h={5}
          color={"orange.400"}
        />
        <Input
          variant={"unstyled"}
          type="text"
          placeholder="Aramak istediğiniz ürünü yazınız"
          cursor={"pointer"}
          w={"100%"}
          h={"100%"}
          px={10}
          border={"1px solid #e0e0e0"}
          borderRadius={"24px"}
          _focus={{ borderColor: "orange.300" }}
          data-peer
        />

        <Box
          w={"100%"}
          h={"500px"}
          bgColor={"orange.300"}
          position={"absolute"}
          borderRadius={"24px"}
          visibility={"hidden"}
          _peerFocus={{ visibility: "visible" }}
        ></Box>
      </Box>

      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={14}
        h={"50px"}
      >
        <Link
          href="/login"
          display={"flex"}
          border={"1px solid #e0e0e0"}
          w={"150px"}
          h={"100%"}
          borderRadius={24}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          _hover={{ borderColor: "orange.300" }}
        >
          <Box w={5} h={5} position={"relative"}>
            <Image src={user} alt="login_img" fill />
          </Box>
          <Text fontSize={"16px"} fontWeight={600}>
            Giriş Yap
          </Text>
        </Link>

        <Link
          href="/basket"
          display={"flex"}
          border={"1px solid #e0e0e0"}
          w={"150px"}
          h={"100%"}
          borderRadius={24}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          _hover={{ borderColor: "orange.300" }}
        >
          <Box w={5} h={5} position={"relative"}>
            <Image src={basket} alt="basket_img" fill />
          </Box>
          <Text fontSize={"16px"} fontWeight={600}>
            Sepetim
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
