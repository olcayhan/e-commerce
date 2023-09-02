"use client";

import React from "react";
import styles from "./categories.module.scss";
import CategoryItem from "@/components/category/CategoryItem";
import category from "@/data/category";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();


  let data = category.filter((item) =>
    item.category.find((item2) => item2 === params.category)
  );

  return (
    <div className={styles.category_main}>
      {data.map((item, key) => {
        return <CategoryItem item={item} key={key} />;
      })}
    </div>
  );
}
