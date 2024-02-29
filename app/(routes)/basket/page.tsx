"use client";
import React from "react";
import { data } from "@/data/basket";
import BasketItem from "@/components/basket-item/BasketItem";
import { Card, Divider, Flex, Link, Text } from "@chakra-ui/react";
import useBasket from "@/utils/useBasket";

export default function page() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"flex-start"}
      w={"100%"}
      gap={"30px"}
      p={"50px"}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"20px"}
        borderRadius={"16px"}
      >
        {useBasket().basket.map((product: any, key: any) => {
          return <BasketItem product={product} key={key} />;
        })}
      </Flex>
      <Card
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        w={"400px"}
        p={"20px"}
        borderRadius={"16px"}
      >
        <Text as={"h1"} fontSize={24} fontWeight={700}>
          Sipariş Özeti
        </Text>
        <Flex
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          w={"100%"}
          h={"100%"}
          gap={"10px"}
          py={"15px"}
        >
          {data.prices.map((price, index) => {
            return (
              <Flex
                key={index}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
              >
                <Text fontSize={14} fontWeight={700}>
                  {price.name}
                </Text>
                <Text fontSize={14} fontWeight={500}>
                  {price.price} TL
                </Text>
              </Flex>
            );
          })}
          <Divider />
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Text fontSize={14} fontWeight={700}>
              Toplam
            </Text>
            <Text fontSize={14} fontWeight={500}>
              {data.total} TL
            </Text>
          </Flex>
        </Flex>

        <Link
          href="/hesap-odeme"
          fontSize={16}
          fontWeight={600}
          bgColor={"orange"}
          color={"#fff"}
          p={"16px"}
          borderRadius={"8px"}
          w={"100%"}
          textAlign={"center"}
          border={"1px solid orange"}
          _hover={{ bgColor: "white", color: "orange", borderColor: "orange" }}
        >
          Sepeti Onayla
        </Link>
      </Card>
    </Flex>
  );
}
