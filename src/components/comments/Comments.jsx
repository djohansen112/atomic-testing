import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="leave a comment..." className={styles.input} />
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href="/login">Login to leave a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Commenter</span>
              <span className={styles.date}>Date of comment</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem saepe
            ea praesentium eligendi omnis vel quas corporis voluptatum
            consectetur quia repellendus repudiandae, quasi pariatur dolore,
            voluptatem adipisci. Quos, inventore veniam?
          </p>
        </div>
      </div>
    </div>
  );
};
