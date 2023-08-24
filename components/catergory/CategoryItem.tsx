import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CategoryItem.module.scss";
import { CategoryItem } from "@/app/(routes)/page";

interface Prop {
  item: CategoryItem;
}

export default function CategoryItem({ item }: Prop) {
  return (
    <Link href={item.url} className={styles.category_item}>
      <Image src={item.image} alt={item.url} width={200} height={200} />
      <p>{item.title}</p>
    </Link>
  );
}
