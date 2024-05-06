import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=testing"
          className={`${styles.category} ${styles.testing}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Testing
        </Link>
        <Link
          href="/blog?cat=development"
          className={`${styles.category} ${styles.development}`}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Development
        </Link>
        <Link
          href="/blog?cat=cat1"
          className={`${styles.category} ${styles.category1}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Extra Category 1
        </Link>
        <Link
          href="/blog?cat=cat2"
          className={`${styles.category} ${styles.category2}`}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Extra Category 2
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
