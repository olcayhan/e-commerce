import React from "react";
import styles from "./register.module.scss";
import Link from "next/link";
export default function page() {
  return (
    <div className={styles.register_main}>
      <div className={styles.register_content}>
        <h1>Üye Ol</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Şifre" />
        <button>Üye Ol</button>
        <Link href="/login">Hesabınız varsa tıklayınız</Link>
      </div>
    </div>
  );
}
