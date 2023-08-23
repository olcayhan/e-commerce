import React from "react";
import styles from "./category.module.scss";
import Product from "@/components/Product";

export type Product = {
  url: string;
  title: string;
  image?: string;
  rate: number;
  rateCount: number;
  price: number;
  tags?: string[];
  discount?: string;
};

export default function page() {
  let products: Product[] = [
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
    <div className={styles.main}>
      <div className={styles.filter_left}></div>

      <div className={styles.product_right}>
        <div className={styles.product_sort}>

        </div>
        <div className={styles.product_list}>
          {products.map((item, key) => {
            return <Product item={item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
