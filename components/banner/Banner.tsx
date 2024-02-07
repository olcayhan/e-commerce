"use client";

import React, { useState } from "react";
import Product from "../product/Product";
import Image from "next/image";
import { products } from "@/data/product";
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Prop {
  item: detailType;
}

type detailType = {
  title: string;
  detail_img: string;
  detail_title: string;
  href: string;
};

export default function Banner({ item }: Prop) {
  const [position, setPosition] = useState(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Box
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w={"100%"}
      minH={"400px"}
      gap={"10px"}
      padding={"20px"}
    >
      {isLoading ? (
        <SkeletonText noOfLines={1} skeletonHeight="14" w={96} />
      ) : (
        <Text fontSize={{ md: "38px", lg: "50px" }} fontWeight={"extrabold"}>
          {item.title}
        </Text>
      )}
      <Flex
        width={"100%"}
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"40px"}
      >
        {isLoading ? (
          <Box>
            <Skeleton w={400} h={300} />
          </Box>
        ) : (
          <Flex
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            bgColor={"bisque"}
            w={"400px"}
            h={"400px"}
            borderRadius={"16px"}
            gap={"20px"}
            padding={"20px"}
          >
            <Image
              src={item.detail_img}
              alt={item.detail_title}
              width={400}
              height={300}
            />
            <Text fontSize={{ md: "16px", lg: "24px" }} fontWeight={600}>
              {item.detail_title}
            </Text>
            <Link
              _hover={{ textDecoration: "none", backgroundColor: "gray.100" }}
              href={item.href}
              fontSize={{ md: "12px", lg: "18px" }}
              fontWeight={600}
              bgColor={"orange"}
              p={4}
              px={8}
              borderRadius={"16px"}
              transition={"all ease 0.3s"}
            >
              Tüm Ürünler
            </Link>
          </Flex>
        )}
        <Flex
          position={"relative"}
          width={"750px"}
          h={"100%"}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <Button
            bgColor={"bisque"}
            position={"absolute"}
            left={0}
            top={"auto"}
            zIndex={3}
            w={10}
            h={10}
            borderRadius={"50%"}
            onClick={() => setPosition(position + 250)}
            isDisabled={position >= 0}
            isLoading={isLoading}
          >
            <Icon as={ChevronLeftIcon} w={5} h={5} />
          </Button>
          <Flex
            transform={`translateX(${position}px)`}
            transition={"ease"}
            transitionProperty={"all"}
            transitionDuration={"1s"}
          >
            {products.map((item, key) => {
              return <Product item={item} key={key} />;
            })}
          </Flex>
          <Button
            bgColor={"bisque"}
            position={"absolute"}
            right={0}
            top={"auto"}
            zIndex={3}
            w={10}
            h={10}
            borderRadius={"50%"}
            onClick={() => setPosition(position - 250)}
            isDisabled={position <= products.length - 3 * 250}
            isLoading={isLoading}
          >
            <Icon as={ChevronRightIcon} w={5} h={5} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
