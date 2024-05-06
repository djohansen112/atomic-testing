import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>Date - </span>
          <span className={styles.category}>Category</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi
          dolore sequi vel sit recusandae, accusamus ad earum rem sint tempora
          impedit perferendis? Corporis, eveniet suscipit. Asperiores libero
          dolorem mollitia.
        </p>
        <Link href="/" className={styles.link}>
          Read More...
        </Link>
      </div>
    </div>
  );
};
