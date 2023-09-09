import React from "react";
import styles from "./basket.module.scss";
import Link from "next/link";
import { data } from "@/data/basket";
import BasketItem from "@/components/basket-item/BasketItem";

export default function page() {
  return (
    <div className={styles.basket_main}>
      <div className={styles.basket_products}>
        {data.items.map((product, key) => {
          return <BasketItem product={product} key={key} />;
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
