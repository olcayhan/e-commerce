"use client";

import React from "react";
import { data } from "@/data/navbar";
import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex
      w={"100%"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={12}
      px={"50px"}
    >
      {data.map((item, key) => {
        return (
          <Box key={key} h={"40px"} position={"relative"} data-group>
            <Link
              href={item.href}
              fontSize={"18px"}
              fontWeight={600}
              _hover={{ textDecoration: "none", color: "orange" }}
            >
              {item.title}
              <Icon
                as={ChevronDownIcon}
                w={5}
                h={5}
                _groupHover={{ transform: "rotate(180deg)" }}
                transition={"all 0.3s ease"}
              />
            </Link>
            <Flex
              position={"absolute"}
              w={"300px"}
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              gap={2}
              visibility={"hidden"}
              _groupHover={{ visibility: "visible" }}
              bgColor={"bisque"}
              zIndex={4}
              borderRadius={"16px"}
              p={3}
            >
              {item.subtitles?.map((sub, key) => {
                return (
                  <Link
                    href={sub.url}
                    key={key}
                    fontSize={"14px"}
                    fontWeight={600}
                    _hover={{ textDecoration: "none", bgColor: "gray.300" }}
                    p={2}
                    borderRadius={"16px"}
                  >
                    {sub.title}
                  </Link>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
