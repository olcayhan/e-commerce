"use client";

import React from "react";
import styles from "./category.module.scss";
import Product from "@/components/product/Product";
import { products } from "@/data/product";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  console.log(params.name);

  return (
    <div className={styles.main}>
      <div className={styles.filter_left}></div>

      <div className={styles.product_right}>
        <div className={styles.product_sort}></div>
        <div className={styles.product_list}>
          {products
            .filter((item) => item.category === params.name)
            .map((item, key) => {
              return <Product item={item} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
}
