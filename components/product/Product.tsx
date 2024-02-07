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
    <Link href={item.url} minW="300px" _hover={{ textDecoration: "none" }}>
      <Card minH={{ md: "400px", lg: "500px" }} w={"100%"} p={0}>
        <CardBody>
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
              <Text fontSize={{ md: "16px", lg: "20px" }} fontWeight="bold">
                {item.title}
              </Text>

              <Box>
                <Flex direction={"row"} gap={2} alignItems={"center"}>
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Icon as={StarIcon} w={4} h={4} />
                  <Text fontSize={{ md: "12px", lg: "20px" }}>
                    ({item.rateCount})
                  </Text>
                </Flex>
              </Box>
              <Text
                fontSize={{ md: "18px", lg: "24px" }}
                mt={6}
                fontWeight="extrabold"
              >
                {item.price} TL
              </Text>
            </Flex>
          )}
        </CardBody>
        <CardFooter>
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
