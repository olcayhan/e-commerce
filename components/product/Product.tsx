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
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface Prop {
  item: ProductType;
}

export default function Product({ item }: Prop) {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Link href={item.url} minW="300px" _hover={{ textDecoration: "none" }}>
      <Card h="500px" w={"100%"} p={0}>
        <CardBody>
          <Flex
            direction={"column"}
            h={"100%"}
            alignItems={"flex-start"}
            gap={3}
          >
            {item.image && (
              <Image src={item.image} alt={item.url} width={300} />
            )}
            <Text fontSize={{ md: "16px", lg: "20px" }} fontWeight="bold">
              {item.title}
            </Text>

            <Box>
              <Text fontSize={{ md: "12px", lg: "20px" }}>
                * * * * * * ({item.rateCount})
              </Text>
            </Box>
            <Text fontSize={{ md: "16px", lg: "20px" }} fontWeight="semibold">
              {item.price} TL
            </Text>
          </Flex>
        </CardBody>
        <CardFooter>
          <Button
            isLoading={isLoading}
            loadingText="Ekleniyor"
            bgColor={"orange"}
            color={"#fff"}
            size={"lg"}
            w={"100%"}
            onClick={(e) => {
              e.preventDefault();
              setLoading(!isLoading);
            }}
          >
            Sepete Ekle
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
