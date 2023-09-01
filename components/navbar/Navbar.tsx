import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { data } from "@/data/navbar";
export default function Navbar() {
  
  return (
    <div className={styles.navbar}>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <Link href={item.href}>{item.title}</Link>
            <div className={styles.navbar_subtitle}>
              {item.subtitles?.map((sub, key) => {
                console.log(sub)
                return (
                  <Link href={sub.url} key={key}>
                    {sub.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
