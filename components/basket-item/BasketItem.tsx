"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { CiTrash } from "react-icons/ci";

export default function BasketItem({ product }: any) {
  const deleteItem = () => {};
  const incrementItem = () => {};
  const decrementItem = () => {};
  const changeItem = () => {};

  return (
    <Card
      w={"100%"}
      display={"flex"}
      direction={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"15px"}
      gap={{ base: "10px", md: "30px" }}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"10px"}>
        <Box
          w={{ base: "75px", md: "150px" }}
          h={{ base: "75px", md: "150px" }}
          position={"relative"}
          border={"1px solid black"}
          borderRadius={4}
        >
          <Image src={product.image} alt="product-image" fill />
        </Box>
        <Text fontSize={{ base: 10, md: 14 }} fontWeight={500} maxW={"500px"}>
          <Text as={"span"} fontWeight={700} px={3}>
            {product.producer}
          </Text>
          {product.productTitle}
        </Text>
      </Flex>

      <Flex justifyContent={"flex-end"} alignItems={"center"} gap={"25px"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"150px"}
          h={"50px"}
          gap={"5px"}
        >
          <Button
            onClick={decrementItem}
            borderRadius={"50%"}
            bgColor={"orange"}
            color={"white"}
            size={{ base: "sm", md: "md" }}
          >
            -
          </Button>
          <Input
            type="text"
            value={product.count}
            pattern="[0-9]*"
            onChange={changeItem}
            textAlign={"center"}
            size={{ base: "sm", md: "md" }}
          />
          <Button
            onClick={incrementItem}
            borderRadius={"50%"}
            bgColor={"orange"}
            color={"white"}
            size={{ base: "sm", md: "md" }}
          >
            +
          </Button>
        </Flex>
        <Text fontSize={{ base: 14, md: 18 }} fontWeight={700}>
          {product.price} TL
        </Text>
        <IconButton
          aria-label="trash-icon"
          icon={<CiTrash />}
          onClick={deleteItem}
          fontSize={{ base: 20, md: 24 }}
          borderRadius={"50%"}
          bgColor={"orange.300"}
        />
      </Flex>
    </Card>
  );
}
