import React from "react";
import Banner from "@/components/banner/Banner";
import android from "@/assets/images/android.webp";
import Carousel from "@/components/carousel/Carousel";
import { Flex } from "@chakra-ui/react";

export default function page() {
  const details = [
    {
      title: "Çok Satanlar",
      detail_img: android,
      detail_title: "Ürünleri Kaçırma",
      href: "/cok-satanlar",
    },
    {
      title: "Yeni Gelenler",
      detail_img: "",
      detail_title: "Sepette Fırsat",
      href: "/yeni-gelenler",
    },
    {
      title: "Çok Değerlendirilenler",
      detail_img: "",
      detail_title: "Kaçırılmayacak Fırsatlar",
      href: "/cok-degerlendirilenler",
    },
    {
      title: "İndirimdekiler",
      detail_img: "",
      detail_title: "İkincisi 1 TL",
      href: "/indirimdekiler",
    },
  ];

  return (
    <Flex
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={{ base: 0, md: "30px" }}
      padding={{ base: 0, md: "50px" }}
    >
      <Carousel />
      {details.map((item, key) => {
        return <Banner item={item} key={key} />;
      })}
    </Flex>
  );
}
