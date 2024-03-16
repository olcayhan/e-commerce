"use client";

import React, { useState } from "react";
import { ProductType } from "@/models/Product";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface Prop {
  item: ProductType;
}

export default function Product({ item }: Prop) {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Link
      href={item.url}
      w={{ base: "150px", md: "250px" }}
      h={"auto"}
      _hover={{ textDecoration: "none" }}
    >
      <Card h={{base:"100%", md: "400px" }} w={"100%"} gap={3} py={2}>
        <CardBody py={0}>
          {isLoading ? (
            <Box>
              <Skeleton height="200px" />
              <SkeletonText mt={6} noOfLines={3} spacing="4" />
              <SkeletonText w={"70%"} mt={6} noOfLines={1} spacing="2" />
              <SkeletonText w={"25%"} mt={6} noOfLines={1} spacing="4" />
            </Box>
          ) : (
            <Flex
              direction={"column"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={3}
            >
              {item.image && (
                <Box
                  w={{ base: "120px", md: "150px" }}
                  h={{ base: "120px", md: "150px" }}
                  flexShrink={0}
                  position={"relative"}
                >
                  <Image src={item.image} alt={item.url} fill />
                </Box>
              )}
              <Flex
                direction={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-end"}
                gap={3}
              >
                <Text fontSize={{ base: "10px", md: "16px" }} fontWeight={600}>
                  {item.title}
                </Text>
                <Text
                  fontSize={{ base: "10px", md: "20px" }}
                  mt={{ base: 0, md: 6 }}
                >
                  {item.price} TL
                </Text>
              </Flex>
            </Flex>
          )}
        </CardBody>
        <CardFooter py={0}>
          <Button
            isLoading={isLoading}
            bgColor={"orange"}
            color={"#fff"}
            size={{ base: "sm", md: "lg" }}
            w={"100%"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Text fontSize={{ base: "10px", md: "20px" }} fontWeight={600}>
              Sepete Ekle
            </Text>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
