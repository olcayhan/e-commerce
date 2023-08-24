import React from "react";
import styles from "./categories.module.scss";
import CategoryItem from "@/components/category/CategoryItem";
import { CategoryType } from "@/models/Category";


export default function page() {
  const data: CategoryType[] = [
    {
      title: "Erkek Giyim",
      image: "",
      url: "/giyim/erkek-giyim",
    },
    {
      title: "Kadın Giyim",
      image: "",
      url: "/giyim/kadin-giyim",
    },
    {
      title: "Çocuk Giyim",
      image: "",
      url: "/giyim/cocuk-giyim",
    },
    {
      title: "Akıllı Telefonlar",
      image: "",
      url: "/elektronik/akilli-telefonlar",
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
