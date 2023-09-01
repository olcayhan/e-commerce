"use client";

import Link from "next/link";
import React from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import { ProductType } from "@/models/Product";

interface Prop {
  item: ProductType;
}

export default function Product({ item }: Prop) {
  return (
    <Link href={item.url} className={styles.product_main}>
      <div className={styles.product_top}>
        {item.image && (
          <Image src={item.image} alt={item.url} width={100} height={180} />
        )}
      </div>
      <div className={styles.product_bottom}>
        <p>{item.title}</p>
        <div>
          <span>({item.rateCount})</span>
        </div>
        <p>{item.price} TL</p>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </Link>
  );
}
