import styles from "./Contact.module.css";
import { Icon } from "../common/Icons";

export const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.contentCard}>
          <div className={styles.glowSpot}></div>

          <div className={styles.cardHeader}>
            <div className={styles.sectionTag}>
              <Icon name="LinkedIn" size={14} color="#38bdf8" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className={styles.title}>Connect With Me on LinkedIn</h2>
            <p className={styles.subtitle}>
              I&apos;m actively open to Senior QA, SDET, and Software Engineering roles.
              Whether you want to discuss engineering opportunities, test automation architectures,
              or collaborate on open-source projects — reach out on LinkedIn!
            </p>
          </div>

          {/* Primary LinkedIn Action CTA */}
          <div className={styles.ctaWrapper}>
            <a
              href="https://www.linkedin.com/in/bitwisebro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinPrimaryBtn}
            >
              <Icon name="LinkedIn" size={22} color="#ffffff" />
              <span>Connect on LinkedIn</span>
              <Icon name="ArrowUpRight" size={18} />
            </a>
          </div>

          {/* Secondary Social Channels Grid */}
          <div className={styles.socialGrid}>
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
                <span className={styles.socialHandle}>linkedin.com/in/bitwisebro</span>
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
