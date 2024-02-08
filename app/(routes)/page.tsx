import React from "react";
import styles from "./home.module.scss";
import Banner from "@/components/banner/Banner";
import android from "@/assets/images/android.webp";
import Carousel from "@/components/carousel/Carousel";

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
    <div className={styles.home_main}>
      <Carousel />
      {details.map((item, key) => {
        return <Banner item={item} key={key} />;
      })}
    </div>
  );
}
