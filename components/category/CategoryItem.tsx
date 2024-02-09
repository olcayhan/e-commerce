import Image from "next/image";
import React from "react";
import styles from "./CategoryItem.module.scss";
import { CategoryType } from "@/models/Category";
import { Box, Card, Link, Text } from "@chakra-ui/react";

interface Prop {
  item: CategoryType;
}

export default function CategoryItem({ item }: Prop) {
  return (
    <Link
      href={item.url}
      p={0}
      w={"300px"}
      height={"300px"}
      _hover={{ textDecoration: "none" }}
    >
      <Card
        h={"100%"}
        w={"100%"}
        _hover={{ transform: "scale(1.05)" }}
        transition={"all ease 0.3s"}
        data-group
      >
        <Box w={"100%"} h={"250px"} position={"relative"}>
          <Image src={item.image} alt={item.url} fill />
        </Box>
        <Text
          fontSize={"24px"}
          fontWeight={600}
          align={"center"}
          _groupHover={{ color: "orange.300" }}
          transition={"all ease 0.3s"}
        >
          {item.title}
        </Text>
      </Card>
    </Link>
  );
}
