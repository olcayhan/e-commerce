import Link from "next/link";
import React from "react";
import styles from "./Product.module.scss";
import RateStar from "./RateStar";
import Image from "next/image";
import { Product } from "@/app/(routes)/category/[id]/page";

interface Prop {
  item: Product;
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
          <RateStar /> <span>({item.rateCount})</span>
        </div>
        <p>{item.price} TL</p>
        <button>Sepete Ekle</button>
      </div>
    </Link>
  );
}
