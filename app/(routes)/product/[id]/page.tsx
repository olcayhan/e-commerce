"use client";
import React, { useState } from "react";
import Image from "next/image";
import { product } from "@/data/product";
import { useParams } from "next/navigation";

import CommentItem from "@/components/details/comment/CommentItem";
import NotFound from "@/app/not-found";
import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function page() {
  const [counter, setCount] = useState(0);
  const params = useParams();
  const { id } = params;
  let data = product.find((item) => item.url === id);

  if (data == undefined) {
    return <NotFound />;
  }

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"100px"}
      padding={"50px"}
    >
      <Flex
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
        minH={"60vh"}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Box w={"100%"} h={"50vh"} position={"relative"}>
            <Image src={data.images[counter]} alt={"image" + counter} fill />
          </Box>
          <Flex alignItems={"center"} justifyContent={"center"} gap={"20px"}>
            <Button
              bgColor={"orange"}
              w={"40px"}
              h={"40px"}
              borderRadius={"50%"}
              onClick={() => {
                counter > 0 && setCount(counter - 1);
              }}
            >
              <Icon as={ChevronLeftIcon} w={8} h={8} color={"white"} />
            </Button>

            {data.images.map((image, key) => {
              return (
                <Button
                  onClick={() => {
                    setCount(key);
                  }}
                  key={key}
                  border={"1px solid #ddd"}
                  borderRadius={"0px"}
                  borderColor={counter === key ? "orange" : "#ddd"}
                  h={"50px"}
                  w={"100px"}
                >
                  <Image src={image} alt={key.toString()} fill />
                </Button>
              );
            })}

            <Button
              bgColor={"orange"}
              w={"40px"}
              h={"40px"}
              borderRadius={"50%"}
              onClick={() => {
                if (data === undefined) return null;
                counter < data.images.length - 1 && setCount(counter + 1);
              }}
            >
              <Icon as={ChevronRightIcon} w={8} h={8} color={"white"} />
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          bgColor={"orange.100"}
          p={"30px"}
          gap={"20px"}
          borderRadius={"16px"}
        >
          <Text
            fontSize={"20px"}
            fontWeight={700}
            opacity={0.9}
            color={"orange"}
          >
            {data.producer}
          </Text>
          <Text fontSize={"18px"} fontWeight={600}>
            {data.productTitle}
          </Text>
          <Text fontSize={"24px"} fontWeight={600} pt={"10px"}>
            {data.price} TL
          </Text>
          <Text fontSize={"16px"} fontWeight={500} opacity={0.9}>
            {data.productDetail}
          </Text>
          {data.color && (
            <Text fontSize={"16px"} fontWeight={700}>
              Renk:
              <Text as={"span"} fontWeight={500} px={"5px"}>
                {data.color}
              </Text>
            </Text>
          )}

          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"20px"}
          >
            {data.otherColors.map((item, key) => {
              return (
                <Link
                  display={"flex"}
                  href={item.href}
                  key={key}
                  p={"10px"}
                  border={"1px solid orange"}
                  borderColor={item.color === data?.color ? "orange" : "#ddd"}
                  borderRadius={"12px"}
                >
                  <Image
                    src={item.image}
                    alt={item.href}
                    height={40}
                    width={40}
                  />
                  <p>{item.color}</p>
                </Link>
              );
            })}
          </Flex>
          <Button
            w={"200px"}
            h={"50px"}
            fontSize={"16px"}
            fontWeight={600}
            color={"#fff"}
            borderRadius={"16px"}
            bgColor={"orange"}
            onClick={() => {}}
          >
            Sepete Ekle
          </Button>
        </Flex>
      </Flex>

      <Flex
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        {data.comments.map((item, key) => {
          return <CommentItem item={item} key={key} />;
        })}
      </Flex>
    </Flex>
  );
}
