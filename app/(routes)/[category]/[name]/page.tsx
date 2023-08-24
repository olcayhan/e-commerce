import React from "react";
import styles from "./category.module.scss";
import Product from "@/components/product/Product";
import { ProductType } from "@/models/Product";

export default function page() {
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
    <div className={styles.main}>
      <div className={styles.filter_left}></div>

      <div className={styles.product_right}>
        <div className={styles.product_sort}></div>
        <div className={styles.product_list}>
          {products.map((item, key) => {
            return <Product item={item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
