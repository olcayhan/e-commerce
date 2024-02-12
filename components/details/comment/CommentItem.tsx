import React from "react";
import { Avatar, Card, Flex, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function CommentItem({ item }: any) {
  return (
    <Card
      display={"flex"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"15px"}
      p={"20px"}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"16px"}>
        <Avatar name={item.name} />
        <Text fontSize={24} fontWeight={700}>
          {item.user}
        </Text>
        <Text fontSize={14} fontWeight={500}>
          {item.createdAt}
        </Text>
      </Flex>
      <Text fontSize={18} fontWeight={600}>
        {item.title}
      </Text>
      <Text as={"span"} fontSize={14} fontWeight={500}>
        {item.comment}
      </Text>

      <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"10px"}>
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
      </Flex>
    </Card>
  );
}
