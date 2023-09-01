import React from "react";
import styles from "./category.module.scss";
import Product from "@/components/product/Product";
import { products } from "@/data/product";

export default function page() {
 
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
