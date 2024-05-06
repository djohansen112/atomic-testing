import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="atomic testing" width={50} height={50} />
          <h1 className={styles.logoText}>AtomicTesting</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis vero, minus repellat officiis blanditiis minima explicabo, in
          quia laudantium ipsam! Accusamus, voluptatem quasi? Eveniet
          voluptatibus laudantium quasi modi minus.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Testing</Link>
          <Link href="/">Development</Link>
          <Link href="/">Category 1</Link>
          <Link href="/">Category 2</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
