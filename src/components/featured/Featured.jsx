import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there, I'm a title!</b> Let's do some subtitle stuff
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            necessitatibus fugiat quis ab vitae maiores sunt consectetur fugit
            quo, totam nesciunt! Nemo dignissimos aut accusantium eveniet
            temporibus similique sunt distinctio?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            debitis praesentium nostrum aliquam doloribus aspernatur?
            Repudiandae fugiat asperiores laudantium tenetur voluptas hic iste,
            unde maxime aspernatur, magnam perspiciatis autem at?
          </p>

          <button className={styles.button}>Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
