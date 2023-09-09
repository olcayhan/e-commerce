import React from "react";
import styles from "./Banner.module.scss";
import Product from "../product/Product";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";

interface Prop {
  item: detailType;
}

type detailType = {
  title: string;
  detail_img: string;
  detail_title: string;
  href: string;
};

export default function Banner({ item }: Prop) {
  
  return (
    <div className={styles.banner_main}>
      <h1>{item.title}</h1>
      <div className={styles.banner_items}>
        <div className={styles.banner_content}>
          <Image
            src={item.detail_img}
            alt={item.detail_title}
            width={400}
            height={300}
          />
          <p>{item.detail_title}</p>
          <Link href={item.href}>Tüm Ürünler</Link>
        </div>
        {products.map((item, key) => {
          return <Product item={item} key={key} />;
        })}
      </div>
    </div>
  );
}
