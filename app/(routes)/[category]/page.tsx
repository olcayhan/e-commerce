"use client";

import React from "react";
import CategoryItem from "@/components/category/CategoryItem";
import category from "@/data/category";
import { useParams } from "next/navigation";
import { Flex } from "@chakra-ui/react";

export default function page() {
  const params = useParams();

  let data = category.filter((item) =>
    item.category.find((item2) => item2 === params.category)
  );

  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={"50px"}
      padding={"100px"}
    >
      {data.map((item, key) => {
        return <CategoryItem item={item} key={key} />;
      })}
    </Flex>
  );
}
