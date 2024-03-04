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
  Icon,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { StarIcon } from "@chakra-ui/icons";

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
      <Card h={{ md: "400px" }} w={"100%"} gap={3} py={2}>
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
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              gap={3}
            >
              {item.image && (
                <Box
                  w={{ base: "100px", md: "200px" }}
                  h={{ base: "75px", md: "150px" }}
                  position={"relative"}
                >
                  <Image src={item.image} alt={item.url} fill />
                </Box>
              )}
              <Text fontSize={{ base: "10px", md: "16px" }} fontWeight="bold">
                {item.title}
              </Text>

              <Box>
                <Flex direction={"row"} gap={2} alignItems={"center"}>
                  <Icon
                    as={StarIcon}
                    w={{ base: 2, md: 4 }}
                    h={{ base: 2, md: 4 }}
                  />
                  <Icon
                    as={StarIcon}
                    w={{ base: 2, md: 4 }}
                    h={{ base: 2, md: 4 }}
                  />
                  <Icon
                    as={StarIcon}
                    w={{ base: 2, md: 4 }}
                    h={{ base: 2, md: 4 }}
                  />
                  <Icon
                    as={StarIcon}
                    w={{ base: 2, md: 4 }}
                    h={{ base: 2, md: 4 }}
                  />
                  <Icon
                    as={StarIcon}
                    w={{ base: 2, md: 4 }}
                    h={{ base: 2, md: 4 }}
                  />
                  <Text fontSize={{ base: "8px", md: "16px" }}>
                    ({item.rateCount})
                  </Text>
                </Flex>
              </Box>
              <Text
                fontSize={{ base: "12px", md: "20px" }}
                mt={{ base: 0, md: 6 }}
                fontWeight="extrabold"
              >
                {item.price} TL
              </Text>
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
