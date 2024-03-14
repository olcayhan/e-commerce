"use client";
import React from "react";
import { basket } from "@/data/basket";
import BasketItem from "@/components/basket-item/BasketItem";
import { Flex } from "@chakra-ui/react";
import BasketCard from "@/components/basket-card/BasketCard";

export default function page() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"flex-start"}
      w={"100%"}
      gap={"30px"}
    >
      <Flex
        w={"100%"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        borderRadius={"16px"}
      >
        {basket.items.map((product: any, key: any) => {
          return <BasketItem product={product} key={key} />;
        })}
      </Flex>
      <BasketCard />
    </Flex>
  );
}
