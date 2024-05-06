import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

export const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.testing}`}>
            Testing
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className={styles.detail}>
            <div className={styles.username}>User name</div>
            <div className={styles.date}>Date</div>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.development}`}>
            Development
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className={styles.detail}>
            <div className={styles.username}>User name</div>
            <div className={styles.date}>Date</div>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.category1}`}>
            Category 1
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className={styles.detail}>
            <div className={styles.username}>User name</div>
            <div className={styles.date}>Date</div>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.category2}`}>
            category2
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className={styles.detail}>
            <div className={styles.username}>User name</div>
            <div className={styles.date}>Date</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
