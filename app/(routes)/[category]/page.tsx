import React from "react";
import styles from "./category.module.scss";
import CategoryItem from "@/components/category/CategoryItem";
import { CategoryType } from "@/models/Category";


export default function page() {
  const data: CategoryType[] = [
    {
      title: "Erkek Giyim",
      image: "",
      url: "/category/erkek-giyim",
    },
    {
      title: "Kadın Giyim",
      image: "",
      url: "/category/kadin-giyim",
    },
    {
      title: "Çocuk Giyim",
      image: "",
      url: "/category/cocuk-giyim",
    },
    {
      title: "Akıllı Telefonlar",
      image: "",
      url: "/category/akilli-telefonlar",
    },
  ];

  return (
    <div className={styles.category_main}>
      {data.map((item, key) => {
        return <CategoryItem item={item} key={key} />;
      })}
    </div>
  );
}
