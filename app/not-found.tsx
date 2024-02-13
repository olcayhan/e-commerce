import { Flex, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"60vh"}
      gap={8}
    >
      <Text fontSize={36} fontWeight={700} color={"orange"}>
        Not Found
      </Text>
      <Text fontSize={24} fontWeight={600}>
        Could not find requested resource
      </Text>
    </Flex>
  );
}
