import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  /* TODO header searching and basket, profile (login signup) */
  const data = [
    {
      title: "Giyim",
      href: "/giyim",
    },
    {
      title: "Çocuk",
      href: "/cocuk",
    },
    {
      title: "Elektronik",
      href: "/elektronik",
    },
    {
      title: "Mobilya",
      href: "/mobilya",
    },
    {
      title: "Çok Satanlar",
      href: "/cok-satanlar",
    },
  ];
  return (
    <div className={styles.navbar}>
      {data.map((item, key) => {
        return <Link href={item.href}>{item.title}</Link>;
      })}
    </div>
  );
}
