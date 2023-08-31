import React from "react";
import styles from "./details.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  {
    /* TODO // define type for product detail  */
  }

  const data = {
    images: ["", "", "", ""],
    producer: "Mini Baby",
    productTitle: "Kauçuk Kenar Koruyucu 2 m",
    productDetail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea id esse consectetur voluptatibus dignissimos deleniti, sunt asperiores repellat libero quibusdam culpa ducimus, alias cum velit quia in quo maxime ratione repudiandae reiciendis deserunt praesentium. Hic laboriosam magnam, aliquid, praesentium asperiores quia nemo in nesciunt optio, nulla sequi tenetur unde consequuntur.",
    price: 199.99,
    rate: 4,
    rateCount: 1323,
    color: "Green",
    otherColors: [
      {
        color: "Blue",
        href: "/blue",
        image: "",
      },
      {
        color: "Dark",
        href: "/dark",
        image: "",
      },
    ],
    comments: [
      {
        user: "asd",
        title: "Çok iyi bir ürün",
        comment:
          "Kurulumu oldukça basit eşim 15 dakikada tek başına kurdu. Boyasız ahşap görüntü olarak çok hoş ve sallanırken ses yapmıyor. İlerleyen zamanlarda ahşabı zarar görürse güncellerim. Teşekkürler ebebek.",
        createdAt: "15-02-2023",
        rate: 4,
      },
      {
        user: "asd",
        title: "Çok iyi bir ürün",
        comment:
          "Kurulumu oldukça basit eşim 15 dakikada tek başına kurdu. Boyasız ahşap görüntü olarak çok hoş ve sallanırken ses yapmıyor. İlerleyen zamanlarda ahşabı zarar görürse güncellerim. Teşekkürler ebebek.",
        createdAt: "15-02-2023",
        rate: 4,
      },
      {
        user: "asd",
        title: "Çok iyi bir ürün",
        comment:
          "Kurulumu oldukça basit eşim 15 dakikada tek başına kurdu. Boyasız ahşap görüntü olarak çok hoş ve sallanırken ses yapmıyor. İlerleyen zamanlarda ahşabı zarar görürse güncellerim. Teşekkürler ebebek.",
        createdAt: "15-02-2023",
        rate: 4,
      },
    ],
    tags: [],
  };

  return (
    <div className={styles.product_detail}>
      <div className={styles.product_detail_top}>
        <div className={styles.detail_top_left}>
          <Image src={data.images[0]} alt="" width={100} height={100} />
          <div>
            <button></button>
            {data.images.map((image, key) => {
              return (
                <button className={styles.detail_images}>
                  <Image src={image} alt="" key={key} width={50} height={50} />
                </button>
              );
            })}
            <button></button>
          </div>
        </div>
        <div className={styles.detail_top_right}>
          <p className={styles.product_producer}>{data.producer}</p>
          <p className={styles.product_title}>{data.productTitle}</p>
          <p className={styles.product_price}>{data.price} TL</p>
          <p className={styles.product_details}>{data.productDetail}</p>

          <p className={styles.product_color}>
            Renk: <span>{data.color}</span>
          </p>
          <div className={styles.detail_colors}>
            {/* colors */}
            {data.otherColors.map((item, key) => {
              return (
                <Link href={item.href} key={key}>
                  <Image
                    src={item.image}
                    alt={item.href}
                    height={40}
                    width={40}
                  />
                  <p>{item.color}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.product_comment}>
        {/* TODO // comments blog */}

        {data.comments.map((item, key) => {
          return (
            <div className={styles.comment_item}>
              <h1>{item.user}</h1>
              <p>{item.title}</p>
              <span>{item.comment}</span>

              <div>
                <span>{item.rate}</span>
                <p>{item.createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
