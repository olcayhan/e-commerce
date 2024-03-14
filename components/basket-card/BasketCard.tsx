"use client";
import React from "react";
import { Card, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { basket } from "@/data/basket";

export default function BasketCard() {
  return (
    <Card
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w={{ base: "100%", md: "400px" }}
      p={"20px"}
      borderRadius={"16px"}
    >
      <Text as={"h1"} fontSize={{ base: 18, md: 24 }} fontWeight={700}>
        Sipariş Özeti
      </Text>
      <Flex
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        w={"100%"}
        gap={"10px"}
        py={"15px"}
      >
        {basket.prices.map((price, index) => {
          return (
            <Flex
              key={index}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
            >
              <Text fontSize={{ base: 12, md: 14 }} fontWeight={700}>
                {price.name}
              </Text>
              <Text fontSize={{ base: 12, md: 14 }} fontWeight={500}>
                {price.price} TL
              </Text>
            </Flex>
          );
        })}
        <Divider />
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
          <Text fontSize={{ base: 12, md: 14 }} fontWeight={700}>
            Toplam
          </Text>
          <Text fontSize={{ base: 12, md: 14 }} fontWeight={500}>
            {basket.total} TL
          </Text>
        </Flex>
      </Flex>

      <Link
        href="/hesap-odeme"
        fontSize={{ base: 14, md: 16 }}
        fontWeight={600}
        bgColor={"orange"}
        color={"#fff"}
        p={{ base: "10px", md: "16px" }}
        borderRadius={"8px"}
        w={"100%"}
        textAlign={"center"}
        border={"1px solid orange"}
        _hover={{ bgColor: "white", color: "orange", borderColor: "orange" }}
      >
        Sepeti Onayla
      </Link>
    </Card>
  );
}
