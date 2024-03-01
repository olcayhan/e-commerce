"use client";

import React, { useState } from "react";
import Image from "next/image";
import user from "@assets/svg/user.svg";
import basket from "@assets/svg/basket.svg";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);
  const search = [
    {
      title: "Önceden aratılmışlar",
      subs: ["akıllı telefon", "kamera"],
    },
    {
      title: "Önceden aratılmışlar",
      subs: ["akıllı telefon", "kamera"],
    },
  ];

  return (
    <Flex
      direction={"row"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
      py={4}
      px={2}
    >
      <Link
        href="/"
        w={"100px"}
        h={"50px"}
        position={"relative"}
        display={{ base: "none", md: "block" }}
      >
        <Image src="" alt="header_logo" fill />
      </Link>
      <Box
        w={{ base: "400px", lg: "600px" }}
        h={"50px"}
        position={"relative"}
        zIndex={99}
      >
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
          onFocus={() => setOpen(true)}
        />

        <Box
          w={"100%"}
          h={"auto"}
          minH={"50px"}
          bgColor={"orange.300"}
          borderRadius={"24px"}
          visibility={isOpen ? "visible" : "hidden"}
          position={"relative"}
        >
          <IconButton
            aria-label="Close Search"
            position={"absolute"}
            right={2}
            top={2}
            icon={<CloseIcon />}
            size={"sm"}
            borderRadius={"50%"}
            onClick={() => setOpen(false)}
          />

          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            gap={3}
            p={3}
          >
            {search.map((item) => {
              return (
                <Box>
                  <Text fontSize={16} fontWeight={700} color={"blue.600"}>
                    {item.title}
                  </Text>
                  <Flex direction={"column"} gap={2}>
                    {item.subs.map((sub) => (
                      <Link
                        fontSize={14}
                        fontWeight={600}
                        ml={2}
                        href={pathname + "search?text=" + sub}
                      >
                        {sub}
                      </Link>
                    ))}
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>

      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        h={"50px"}
      >
        <Link
          href="/login"
          display={"flex"}
          border={"1px solid #e0e0e0"}
          w={{ base: "50px", md: "100px", lg: "150px" }}
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
          <Text
            fontSize={{ base: 12, lg: 16 }}
            display={{ base: "none", md: "block" }}
            fontWeight={600}
          >
            Giriş Yap
          </Text>
        </Link>

        <Link
          href="/basket"
          display={"flex"}
          border={"1px solid #e0e0e0"}
          w={{ base: "50px", md: "100px", lg: "150px" }}
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
          <Text
            fontSize={{ base: 12, lg: 16 }}
            display={{ base: "none", md: "block" }}
            fontWeight={600}
          >
            Sepetim
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
