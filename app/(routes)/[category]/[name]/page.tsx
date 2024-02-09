"use client";

import React from "react";
import Product from "@/components/product/Product";
import { products } from "@/data/product";
import { useParams, useSearchParams } from "next/navigation";
import { Box, Flex, Link } from "@chakra-ui/react";

export default function page() {
  const params = useParams();
  const query = useSearchParams().get("sortQuery");

  const sorts = [
    {
      name: "Akıllı Sıralama",
      href: "?sortQuery=smart",
      value: "smart",
    },
    {
      name: "Yeni Gelenler",
      href: "?sortQuery=newest",
      value: "newest",
    },
    {
      name: "Fiyat: Düşükten Yükseğe",
      href: "?sortQuery=lowest",
      value: "lowest",
    },
    {
      name: "Fiyat: Yüksekten Düşüğe",
      href: "?sortQuery=highest",
      value: "highest",
    },
  ];

  return (
    <Flex direction={"row"} gap={6}>
      <Box
        position={"sticky"}
        w={"20vw"}
        border={"1px solid #e0e0e0"}
        minH={"100vh"}
        h={"auto"}
      ></Box>

      <Flex direction={"column"} w={"100%"} gap={5}>
        <Flex
          direction={"row"}
          h={"80px"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={3}
        >
          {sorts.map((sort, index) => {
            return (
              <Link
                key={index}
                href={sort.href}
                border={"1px solid #e0e0e0"}
                p={2}
                borderRadius={"24px"}
                _hover={{ borderColor: "orange" }}
                fontSize={"14px"}
                bgColor={query === sort.value ? "orange" : "white"}
                color={query === sort.value ? "white" : "black"}
              >
                {sort.name}
              </Link>
            );
          })}
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={8}
        >
          {products
            .filter((item) => item.category === params.name)
            .map((item, key) => {
              return <Product item={item} key={key} />;
            })}
        </Flex>
      </Flex>
    </Flex>
  );
}
