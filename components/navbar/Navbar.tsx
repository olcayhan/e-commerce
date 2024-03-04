"use client";

import React, { useState } from "react";
import { data } from "@/data/navbar";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isCategoryShown, setCategoryShown] = useState(false);
  const router = useRouter();

  const barTitle = [
    { title: "Keşfet", href: "/" },
    { title: "Kategoriler", href: "/" },
    { title: "Sepetim", href: "/basket" },
    { title: "Listelerim", href: "/list" },
    { title: "Diğer", href: "/other" },
  ];
  return (
    <>
      {/* mobile */}
      <Flex
        position={"absolute"}
        display={isCategoryShown ? "flex" : "none"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        w={"100%"}
        h={"100%"}
        top={0}
        zIndex={99}
        bgColor={"aliceblue"}
        gap={3}
        p={4}
      >
        <Accordion allowToggle w={"100%"}>
          {data.map((item, key) => {
            return (
              <AccordionItem key={key}>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                {item.subtitles.map((sub, key) => {
                  return (
                    <AccordionPanel key={key}>
                      <Link href={sub.url}>{sub.title}</Link>
                    </AccordionPanel>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>

      <SimpleGrid
        display={{ base: "grid", md: "none" }}
        columns={barTitle.length}
        spacing={5}
        position={"fixed"}
        h={"10vh"}
        bgColor={"blue.200"}
        bottom={0}
        w={"100%"}
        zIndex={100}
      >
        {barTitle.map((item, key) => {
          return (
            <Flex
              as={"button"}
              key={key}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => {
                if (item.title === "Kategoriler") {
                  setCategoryShown(true);
                } else {
                  setCategoryShown(false);
                  router.push(item.href);
                }
              }}
            >
              <Icon as={BellIcon} boxSize={8} />
              <Text fontSize={14} fontWeight={600}>
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>

      {/* desktop */}
      <Flex
        w={"100%"}
        display={{ base: "none", md: "flex" }}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={10}
        px={3}
        py={1}
      >
        {data.map((item, key) => {
          return (
            <Flex
              alignItems={"center"}
              key={key}
              h={"40px"}
              position={"relative"}
              data-group
            >
              <Link
                href={item.href}
                fontSize={{ md: 14, lg: 16 }}
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
                display={"none"}
                position={"absolute"}
                top={"40px"}
                w={"300px"}
                direction={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                gap={2}
                _groupHover={{ display: "flex" }}
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
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}
