import React from "react";
import styles from "./basket.module.scss";
import Link from "next/link";
import Image from "next/image";

import trash from "@assets/svg/trash.svg";

export default function page() {
  return (
    <div className={styles.basket_main}>
      <div className={styles.basket_products}>
        <div className={styles.basket_item}>
          <div className={styles.item_left}>
            <Image src="" alt="" width={150} height={150} />
            <p>
              <span>Rise & Shine</span> Antiperspirant Whitening Roll-on - 75 ml
            </p>
          </div>

          <div className={styles.item_right}>
            <div className={styles.item_counter}></div>
            <p>120 TL</p>
            <button>
              <Image src={trash} alt="trash" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className={styles.basket_item}>
          <div className={styles.item_left}>
            <Image src="" alt="" width={150} height={150} />
            <p>
              <span>Rise & Shine</span> Antiperspirant Whitening Roll-on - 75 ml
            </p>
          </div>

          <div className={styles.item_right}>
            <div className={styles.item_counter}></div>
            <p>120 TL</p>
            <button>
              <Image src={trash} alt="trash" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.basket_checkout}>
        <h1>Sipariş Özeti</h1>
        <div className={styles.checkout_content}>
          <div>
            <p>Ürün Toplamı</p>
            <span>100TL</span>
          </div>
          <div>
            <p>Ürün Toplamı</p>
            <span>100TL</span>
          </div>

          <div className={styles.checkout_total}>
            <p>Ürün Toplamı</p>
            <span>100TL</span>
          </div>
        </div>

        <Link href="/hesap-odeme">Sepeti Onayla</Link>
      </div>
    </div>
  );
}
