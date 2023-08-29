import React from "react";
import styles from "./basket.module.scss";
import Link from "next/link";
import Image from "next/image";

import trash from "@assets/svg/trash.svg";

export default function page() {
  const data = {
    prices: {
      total: 240,
      cargo: 0,
      discount: 0,
      product: 240,
    },
    items: [
      {
        title: "Antiperspirant Whitening Roll-on - 75 ml",
        producerTitle: "Rise & Shine",
        price: 120,
        image: "",
      },
      {
        title: "Antiperspirant Whitening Roll-on - 75 ml",
        producerTitle: "Rise & Shine",
        price: 120,
        image: "",
      },
    ],
  };

  return (
    <div className={styles.basket_main}>
      <div className={styles.basket_products}>
        {data.items.map((product, key) => {
          return (
            <div className={styles.basket_item}>
              <div className={styles.item_left}>
                <Image src={product.image} alt="" width={150} height={150} />
                <p>
                  <span>{product.producerTitle}</span> {product.title}
                </p>
              </div>

              <div className={styles.item_right}>
                <div className={styles.item_counter}></div>
                <p>{product.price} TL</p>
                <button>
                  <Image src={trash} alt="trash" width={20} height={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.basket_checkout}>
        <h1>Sipariş Özeti</h1>
        <div className={styles.checkout_content}>
          <div>
            <p>Ürün Toplamı</p>
            <span>{data.prices.product} TL</span>
          </div>
          <div>
            <p>İndirimler</p>
            <span>{data.prices.discount} TL</span>
          </div>
          <div>
            <p>Kargo</p>
            <span>{data.prices.cargo} TL</span>
          </div>

          <div className={styles.checkout_total}>
            <p>Toplam</p>
            <span>{data.prices.total} TL</span>
          </div>
        </div>

        <Link href="/hesap-odeme">Sepeti Onayla</Link>
      </div>
    </div>
  );
}
