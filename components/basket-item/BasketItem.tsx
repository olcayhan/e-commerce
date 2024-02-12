"use client";

import React, { useState } from "react";
import Image from "next/image";
import trash from "@assets/svg/trash.svg";
import { Box, Button, Card, Flex, Input, Text } from "@chakra-ui/react";

export default function BasketItem({ product }: any) {
  const [count, setCount] = useState(1);

  const deleteItem = () => {};
  const incrementItem = () => {};
  const decrementItem = () => {};
  const changeItem = () => {};

  return (
    <Card
      w={"100%"}
      display={"flex"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"15px"}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"10px"}>
        <Box w={"150px"} h={"150px"} position={"relative"}>
          <Image src={product.image} alt="product-image" fill />
        </Box>
        <Text fontSize={"13px"} fontWeight={500} maxW={"500px"}>
          <Text as={"span"} fontWeight={700} px={3}>
            {product.producerTitle}
          </Text>
          {product.title}
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
            onClick={incrementItem}
            w={"50px"}
            borderRadius={"50%"}
            bgColor={"orange"}
            color={"white"}
          >
            -
          </Button>
          <Input
            type="text"
            value={count}
            pattern="[0-9]*"
            onChange={changeItem}
            textAlign={"center"}
          />
          <Button
            onClick={decrementItem}
            borderRadius={"50%"}
            w={"50px"}
            bgColor={"orange"}
            color={"white"}
          >
            +
          </Button>
        </Flex>
        <Text fontSize={"18px"} fontWeight={700}>
          {product.price} TL
        </Text>
        <Button
          onClick={deleteItem}
          w={12}
          h={12}
          borderRadius={"50%"}
          bgColor={"orange.100"}
        >
          <Image src={trash} alt="trash" width={20} height={20} />
        </Button>
      </Flex>
    </Card>
  );
}
