import React from "react";
import styles from "./home.module.scss";
import Banner from "@/components/banner/Banner";

export default function page() {
  let details = [
    {
      title: "Çok Satanlar",
    },
    {
      title: "Yeni Gelenler",
    },
    {
      title: "Çok Değerlendirilenler",
    },
    {
      title: "İndirimdekiler",
    },
  ];

  return (
    <div className={styles.home_main}>
      {details.map((item, key) => {
        return <Banner item={item} key={key} />;
      })}
    </div>
  );
}
