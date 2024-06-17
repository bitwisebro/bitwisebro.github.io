import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-120757.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack QA</h3>
              <p>
                I'm a QA with Strong focus in Integration Testing, Test Automation(Selenium, Playwright, Appium),
                Mocking Independent Services, Git, AWS
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
