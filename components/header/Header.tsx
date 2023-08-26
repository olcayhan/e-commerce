import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

import search from "@assets/svg/search.svg";
import user from "@assets/svg/user.svg";
import basket from "@assets/svg/basket.svg";

export default function Header() {
  return (
    <div className={styles.header_main}>
      <Link href="/" className={styles.header_logo}>
        <Image src="" alt="header_logo" width={50} height={50} />
      </Link>
      <div className={styles.header_search}>
        <Image src={search} alt="search_icon" width={25} height={25} />
        <input type="text" placeholder="Aramak istediğiniz ürünü yazınız" />
      </div>

      <div className={styles.header_right}>
        <Link href="/login">
          <Image src={user} alt="login_img" width={20} height={20} />
          <p>Giriş Yap</p>
        </Link>

        <Link href="/basket">
          <Image src={basket} alt="basket_img" width={20} height={20} />
          <p>Sepetim</p>
        </Link>
      </div>
    </div>
  );
}
