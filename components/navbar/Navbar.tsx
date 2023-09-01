import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  const data = [
    {
      title: "Giyim",
      href: "/giyim",
      subtitles: [
        { title: "Erkek Giyim", href: "/giyim/erkek-giyim" },
        { title: "Kadın Giyim", href: "/giyim/kadin-giyim" },
        { title: "Çocuk Giyim", href: "/giyim/cocuk-giyim" },
      ],
    },
    {
      title: "Çocuk",
      href: "/cocuk",
      subtitles: [
        { title: "Erkek Giyim", href: "/giyim/erkek-giyim" },
        { title: "Kadın Giyim", href: "/giyim/kadin-giyim" },
        { title: "Çocuk Giyim", href: "/giyim/cocuk-giyim" },
      ],
    },
    {
      title: "Elektronik",
      href: "/elektronik",
      subtitles: [
        { title: "Erkek Giyim", href: "/giyim/erkek-giyim" },
        { title: "Kadın Giyim", href: "/giyim/kadin-giyim" },
        { title: "Çocuk Giyim", href: "/giyim/cocuk-giyim" },
      ],
    },
    {
      title: "Çok Satanlar",
      href: "/cok-satanlar",
    },
  ];
  return (
    <div className={styles.navbar}>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <Link href={item.href}>{item.title}</Link>
            <div className={styles.navbar_subtitle}>
              {item.subtitles?.map((sub, key) => {
                return (
                  <Link href={sub.href} key={key}>
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
