"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import carousel1 from "@assets/images/carusel-1.jpg";
import carousel2 from "@assets/images/carusel-2.jpg";
import Image from "next/image";

export default function Carousel() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const caruselData = [
    {
      title: "deneme1",
      images: [carousel1, carousel2, carousel1, carousel2],
      bgColor: "green.400",
    },
    {
      title: "deneme2",
      images: [carousel2, carousel1, carousel2, carousel1],
      bgColor: "orange.500",
    },
    {
      title: "deneme3",
      images: [carousel1, carousel2],
      bgColor: "gray.300",
    },
  ];
  return (
    <Flex
      direction={"column"}
      bgColor={caruselData[tabIndex].bgColor}
      w={"100%"}
      h={"600px"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} gap={10}>
        {caruselData.map((data, index) => {
          return (
            <Button
              fontSize={{ base: "12px", md: "16px", lg: "20px" }}
              color={"white"}
              bgColor={tabIndex == index ? "#2B3499" : "transparent"}
              borderRadius={"16px"}
              p={6}
              _hover={{ bgColor: "" }}
              _active={{ bgColor: "" }}
              onClick={() => {
                setTabIndex(index);
                setSelectedImage(0);
              }}
            >
              {data.title}
            </Button>
          );
        })}
      </Flex>

      <Link
        w={{ base: "90%", md: "80%" }}
        h={"400px"}
        position={"relative"}
        borderRadius={"36px"}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Image
          src={caruselData[tabIndex].images[selectedImage]}
          alt="asd"
          layout="fill"
        />
      </Link>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={14}
        gap={4}
      >
        <Button
          w={{ base: 8, lg: 12 }}
          h={{ base: 8, lg: 12 }}
          borderRadius={"50%"}
          onClick={() => {
            if (selectedImage > 0) {
              setSelectedImage(selectedImage - 1);
            } else {
              setSelectedImage(0);
              if (tabIndex > 0) {
                setTabIndex(tabIndex - 1);
              } else {
                setTabIndex(caruselData.length - 1);
              }
            }
          }}
        >
          <Icon
            as={ChevronLeftIcon}
            w={{ base: 6, lg: 8 }}
            h={{ base: 6, lg: 8 }}
          />
        </Button>

        {caruselData[tabIndex].images.map((data, index) => {
          return (
            <Button
              w={{ base: 16, md: 24, lg: 32 }}
              h={"100%"}
              borderRadius={"10px"}
              position={"relative"}
              overflow={"hidden"}
              onClick={() => setSelectedImage(index)}
              border={selectedImage == index ? "1px solid #2B3499" : "none"}
            >
              <Image src={data} alt="asd" layout="fill" />
            </Button>
          );
        })}

        <Button
          w={{ base: 8, lg: 12 }}
          h={{ base: 8, lg: 12 }}
          borderRadius={"50%"}
          onClick={() => {
            if (caruselData[tabIndex].images.length - 1 > selectedImage) {
              setSelectedImage(selectedImage + 1);
            } else {
              setSelectedImage(0);
              if (caruselData.length - 1 > tabIndex) {
                setTabIndex(tabIndex + 1);
              } else {
                setTabIndex(0);
              }
            }
          }}
        >
          <Icon
            as={ChevronRightIcon}
            w={{ base: 6, lg: 8 }}
            h={{ base: 6, lg: 8 }}
          />
        </Button>
      </Flex>
    </Flex>
  );
}
