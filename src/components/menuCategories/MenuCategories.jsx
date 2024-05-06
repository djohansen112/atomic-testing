import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

export const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=testing"
        className={`${styles.categoryItem} ${styles.testing}`}
      >
        Testing
      </Link>{" "}
      <Link
        href="/blog?cat=development"
        className={`${styles.categoryItem} ${styles.development}`}
      >
        Development
      </Link>{" "}
      <Link
        href="/blog?cat=category1"
        className={`${styles.categoryItem} ${styles.category1}`}
      >
        Category 1
      </Link>{" "}
      <Link
        href="/blog?cat=category2"
        className={`${styles.categoryItem} ${styles.category2}`}
      >
        Category 2
      </Link>
    </div>
  );
};
