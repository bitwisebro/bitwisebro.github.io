import styles from "./Footer.module.css";
import { Icon } from "../common/Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <a href="#" className={styles.brand}>
            <span className={styles.bracket}>&lt;</span>
            <span className={styles.name}>bitwisebro</span>
            <span className={styles.bracket}> /&gt;</span>
          </a>

          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className={styles.topBtn} aria-label="Back to top">
            <span>Back to top</span>
            <Icon name="ArrowUpRight" size={14} />
          </button>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Gaurav Jani. Crafted with quality engineering, React &amp; Vite.
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/bitwisebro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="GitHub" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/bitwisebro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="LinkedIn" size={18} />
            </a>
            <a
              href="mailto:gauravjani207@yahoo.com"
              aria-label="Email"
            >
              <Icon name="Mail" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
