import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import { Comments } from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>User name</span>
              <span className={styles.date}>Post date</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis tenetur, similique beatae, nostrum suscipit ea officia
              nam repellat sunt culpa saepe vero ad corrupti illo dignissimos.
              Incidunt iure ullam vero.
            </p>
            <h2>Second paragraph</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis tenetur, similique beatae, nostrum suscipit ea officia
              nam repellat sunt culpa saepe vero ad corrupti illo dignissimos.
              Incidunt iure ullam vero.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis tenetur, similique beatae, nostrum suscipit ea officia
              nam repellat sunt culpa saepe vero ad corrupti illo dignissimos.
              Incidunt iure ullam vero.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
