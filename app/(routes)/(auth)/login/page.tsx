import React from "react";
import styles from "./login.module.scss";
import Link from "next/link";
export default function page() {
  return (
    <div className={styles.login_main}>
      <div className={styles.login_content}>
        <h1>Giriş Yap</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Şifre" />
        <button>Giriş Yap</button>
        <Link href="/register">Üye olmak için tıklayın</Link>
      </div>
    </div>
  );
}
