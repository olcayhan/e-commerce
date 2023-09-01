"use client";
import React from "react";
import styles from "./details.module.scss";
import Image from "next/image";
import Link from "next/link";
import {product} from "@/data/product";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const { id } = params;
  let data = product.find((item) => item.id === id);

  if (data == undefined) {
    return null;
  }

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
          {data.color && (
            <p className={styles.product_color}>
              Renk: <span>{data.color}</span>
            </p>
          )}

          <div className={styles.detail_colors}>
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

          {data.size && (
            <p className={styles.product_color}>
              Beden: <span>{data.size}</span>
            </p>
          )}
          <div className={styles.detail_colors}>
            {data.otherSizes?.map((item, key) => {
              return (
                <Link href={item.href} key={key}>
                  <p>{item.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.product_comment}>
        {data.comments.map((item, key) => {
          return (
            <div className={styles.comment_item} key={key}>
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
