import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gaurav Jani</h1>
        <p className={styles.description}>
          I'm a Software Engineer with 2+ years of experience in QA. Reach out
          if you'd like to learn more!
        </p>
        <a href="mailto:gauravjani207@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl(
          "https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-120757.jpg"
        )}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
