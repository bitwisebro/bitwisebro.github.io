import styles from "./About.module.css";
import { Icon } from "../common/Icons";

export const About = () => {
  const pillars = [
    {
      icon: "Cpu",
      title: "Enterprise Test Automation",
      description:
        "Architecting resilient, modular test frameworks with Playwright and Selenium WebDriver. Specializing in Page Object Model (POM), parallel workers, and dynamic data-driven execution.",
      color: "#818cf8",
    },
    {
      icon: "Activity",
      title: "Performance & Load Testing",
      description:
        "Designing high-concurrency performance and stress test suites using k6 and Postman to evaluate p95/p99 latency thresholds and uncover backend memory bottlenecks.",
      color: "#38bdf8",
    },
    {
      icon: "Layers",
      title: "CI/CD & Flaky-Free Quality Gates",
      description:
        "Integrating automated regression suites directly into GitHub Actions pipelines, featuring service mocking, automated failure artifacts, and real-time status reporting.",
      color: "#34d399",
    },
    {
      icon: "Terminal",
      title: "Backend Utilities & CLI Tooling",
      description:
        "Developing developer-centric CLI utilities, Telegram bots, and automated bash workflows that simplify environment setup and streamline developer productivity.",
      color: "#fbbf24",
    },
  ];

  return (
              <section className={styles.aboutSection} id="about">
                <div className={styles.container}>
                  {/* Section Header */}
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionTag}>
                      <Icon name="Sparkles" size={14} />
                      <span>Engineering Philosophy</span>
                    </div>
                    <h2 className={styles.title}>About Me</h2>
                    <p className={styles.subtitle}>
                      Bridging the gap between software development and quality engineering
                      with resilient automation, deep systems testing, and modern developer tooling.
                    </p>
                  </div>

                  <div className={styles.grid}>
                    {/* Left Column: Engineer Profile Card */}
                    <div className={styles.profileCard}>
                      <div className={styles.profileHeader}>
                        <div className={styles.avatarGlow}>
                          <div className={styles.avatar}>
                            <span className={styles.avatarText}>&lt;GJ /&gt;</span>
                          </div>
                        </div>
                        <div className={styles.profileInfo}>
                          <h3 className={styles.profileName}>Gaurav Jani</h3>
                          <p className={styles.profileHandle}>@bitwisebro</p>
                          <div className={styles.profileRoleBadge}>
                            <Icon name="ShieldCheck" size={14} />
                            <span>SDET &amp; Automation Engineer</span>
                          </div>
                        </div>
                      </div>

                  <p className={styles.profileBio}>
                    I specialize in quality-first software engineering. With 3+ years of experience
                    across E-commerce PaaS and IaaS cloud systems, I focus on eliminating regression risks,
                    accelerating release cycles, and building scalable test infrastructure.
                  </p>

                  <div className={styles.metaList}>
                    <div className={styles.metaItem}>
                      <Icon name="MapPin" size={16} />
                      <span>Pune, India • Open to Global Remote</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Icon name="Briefcase" size={16} />
                      <span>Testrig Technologies</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Icon name="Code" size={16} />
                      <span>Java, TypeScript, Playwright, Python</span>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href="https://github.com/bitwisebro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <Icon name="GitHub" size={18} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bitwisebro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <Icon name="LinkedIn" size={18} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="mailto:gauravjani207@yahoo.com"
                      className={styles.socialLink}
                    >
                      <Icon name="Mail" size={18} />
                      <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: 4 Pillars of Quality Engineering */}
                <div className={styles.pillarsGrid}>
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className={styles.pillarCard}>
                      <div
                        className={styles.pillarIcon}
                        style={{ color: pillar.color, borderColor: `${pillar.color}40`, backgroundColor: `${pillar.color}15` }}
                      >
                        <Icon name={pillar.icon} size={22} color={pillar.color} />
                      </div>
                      <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                      <p className={styles.pillarDesc}>{pillar.description}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>
        );
};
