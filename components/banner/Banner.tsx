import React from "react";
import styles from "./Banner.module.scss";
import Product from "../product/Product";
import { ProductType } from "@/models/Product";

interface Prop {
  item: detailType;
}

type detailType = {
  title: string;
};

export default function Banner({ item }: Prop) {
  let products: ProductType[] = [
    {
      url: "/product/568732",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/214234",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/174563",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/123765",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/789453",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/238713",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/product/896733",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
    {
      url: "/",
      title: "Phone",
      rate: 5,
      rateCount: 199,
      price: 1999,
    },
  ];

  return (
    <div className={styles.banner_main}>
      <h1>{item.title}</h1>
      <div className={styles.banner_items}>
        {products.map((item, key) => {
          return <Product item={item} key={key} />;
        })}
      </div>
    </div>
  );
}
