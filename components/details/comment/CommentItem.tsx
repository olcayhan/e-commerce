import React from "react";
import styles from "./commentItem.module.scss";

export default function CommentItem({ item }: any) {
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
}
