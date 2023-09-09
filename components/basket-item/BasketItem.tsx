"use client";

import React, { useState } from "react";
import styles from "./BasketItem.module.scss";
import Image from "next/image";
import trash from "@assets/svg/trash.svg";

export default function BasketItem({ product }: any) {
  const [count, setCount] = useState(1);

  const deleteItem = () => {};
  const incrementItem = () => {};
  const decrementItem = () => {};
  const changeItem = () => {};

  return (
    <div className={styles.basket_item}>
      <div className={styles.item_left}>
        <Image src={product.image} alt="" width={150} height={150} />
        <p>
          <span>{product.producerTitle}</span> {product.title}
        </p>
      </div>

      <div className={styles.item_right}>
        <div className={styles.item_counter}>
          <button onClick={incrementItem}>-</button>
          <input
            type="text"
            value={count}
            pattern="[0-9]*"
            onChange={changeItem}
          />
          <button onClick={decrementItem}>+</button>
        </div>
        <p>{product.price} TL</p>
        <button onClick={deleteItem}>
          <Image src={trash} alt="trash" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
