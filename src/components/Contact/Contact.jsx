import { useState } from "react";
import styles from "./Contact.module.css";
import { Icon } from "../common/Icons";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "gauravjani207@yahoo.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
        <section className={styles.contactSection} id="contact">
          <div className={styles.container}>
            <div className={styles.contentCard}>
              <div className={styles.glowSpot}></div>

              <div className={styles.cardHeader}>
                <div className={styles.sectionTag}>
                  <Icon name="Mail" size={14} />
                  <span>Let's Connect</span>
                </div>
                <h2 className={styles.title}>Let's Build Resilient Systems Together</h2>
                <p className={styles.subtitle}>
                  I'm actively open to Senior QA, SDET, and Software Engineering roles.
                  Feel free to reach out for engineering opportunities, framework architecture consulting,
                  or open-source collaborations.
                </p>
              </div>

              {/* Quick Copy Email Box */}
              <div className={styles.copyBox}>
                <div className={styles.emailDisplay}>
                  <Icon name="Mail" size={18} color="#818cf8" />
                  <span className={styles.emailAddress}>{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`${styles.copyBtn} ${copied ? styles.copySuccess : ""}`}
                  aria-label="Copy email address"
                >
                  <Icon name={copied ? "Check" : "Copy"} size={16} />
                  <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                </button>
              </div>

              {/* Social Channels Grid */}
              <div className={styles.socialGrid}>
                <a
                  href="mailto:gauravjani207@yahoo.com"
                  className={styles.socialCard}
                >
                  <div className={styles.socialIcon}>
                    <Icon name="Mail" size={22} color="#818cf8" />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialPlatform}>Direct Email</span>
                    <span className={styles.socialHandle}>gauravjani207@yahoo.com</span>
                  </div>
                  <Icon name="ArrowUpRight" size={16} className={styles.socialArrow} />
                </a>

                <a
                  href="https://www.linkedin.com/in/bitwisebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <div className={styles.socialIcon}>
                    <Icon name="LinkedIn" size={22} color="#38bdf8" />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialPlatform}>LinkedIn</span>
                    <span className={styles.socialHandle}>in/bitwisebro</span>
                  </div>
                  <Icon name="ArrowUpRight" size={16} className={styles.socialArrow} />
                </a>

                <a
                  href="https://github.com/bitwisebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <div className={styles.socialIcon}>
                    <Icon name="GitHub" size={22} color="#f8fafc" />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialPlatform}>GitHub</span>
                    <span className={styles.socialHandle}>github.com/bitwisebro</span>
                  </div>
                  <Icon name="ArrowUpRight" size={16} className={styles.socialArrow} />
                </a>
              </div>
            </div>
          </div>
      </section>
      );
};
