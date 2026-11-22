import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Icon } from "../common/Icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
          <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={styles.navbar}>
              <a href="#" className={styles.brand}>
                <span className={styles.brandBracket}>&lt;</span>
                <span className={styles.brandName}>bitwisebro</span>
                <span className={styles.brandBracket}> /&gt;</span>
                <span className={styles.statusDot} title="Online / Open to Work"></span>
              </a>

              {/* Desktop Nav Items */}
              <ul className={styles.navLinks}>
                <li>
                  <a href="#about" className={styles.navLink}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className={styles.navLink}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className={styles.navLink}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className={styles.navLink}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className={styles.navLink}>
                    Contact
                  </a>
                </li>
              </ul>

              {/* Action Group */}
              <div className={styles.actions}>
                <a
                  href="https://github.com/bitwisebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  aria-label="GitHub Profile"
                >
                  <Icon name="GitHub" size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bitwisebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="LinkedIn" size={18} />
                </a>
                <a
                  href="mailto:gauravjani207@yahoo.com"
                  className={styles.contactBtn}
                >
                  <span>Let&apos;s Talk</span>
                  <Icon name="ArrowRight" size={14} />
                </a>

                {/* Mobile Menu Button */}
                <button
                  className={styles.menuToggle}
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                >
                  <Icon name={menuOpen ? "Close" : "Menu"} size={22} />
                </button>
              </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ""}`}>
              <ul className={styles.mobileLinks}>
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setMenuOpen(false)}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={() => setMenuOpen(false)}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
              <div className={styles.mobileActions}>
                <a
                  href="mailto:gauravjani207@yahoo.com"
                  className={styles.mobileContactBtn}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="Mail" size={18} />
                  <span>gauravjani207@yahoo.com</span>
                </a>
              </div>
            </div>
        </header>
        );
};
