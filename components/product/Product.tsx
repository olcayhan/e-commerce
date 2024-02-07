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
      minW="250px"
      h={"auto"}
      _hover={{ textDecoration: "none" }}
    >
      <Card h={{ md: "300px", lg: "400px" }} w={"100%"} gap={3}>
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
                <Image src={item.image} alt={item.url} width={300} />
              )}
              <Text fontSize={{ md: "12px", lg: "16px" }} fontWeight="bold">
                {item.title}
              </Text>

              <Box>
                <Flex direction={"row"} gap={2} alignItems={"center"}>
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Text fontSize={{ md: "12px", lg: "16px" }}>
                    ({item.rateCount})
                  </Text>
                </Flex>
              </Box>
              <Text
                fontSize={{ md: "16px", lg: "20px" }}
                mt={6}
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
            size={"lg"}
            w={"100%"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sepete Ekle
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
