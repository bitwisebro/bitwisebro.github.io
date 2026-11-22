import styles from "./About.module.css";
import { Icon } from "../common/Icons";

export const About = () => {
  const pillars = [
    {
      icon: "Cpu",
      title: "Enterprise Test Automation",
      description:
        "Designing and implementing robust testing frameworks from scratch using Playwright, TypeScript, and Java. Specializing in Hybrid frameworks, Page Object Model, and scalable parallel execution.",
      color: "#818cf8",
    },
    {
      icon: "Layers",
      title: "Dockerized API Mocks & CI/CD",
      description:
        "Building containerized mock servers and service virtualization to optimize test efficiency, reduce test runtimes, and integrate automated quality gates into GitHub Actions workflows.",
      color: "#38bdf8",
    },
    {
      icon: "Activity",
      title: "Performance & Stress Testing",
      description:
        "Designing high-concurrency performance and stress test suites using k6 and JMeter to evaluate p95/p99 latency thresholds and uncover memory bottlenecks in distributed architectures.",
      color: "#34d399",
    },
    {
      icon: "Terminal",
      title: "Backend Utilities & Tooling",
      description:
        "Developing developer-centric CLI utilities, serverless Telegram bots, and automated bash workflows that simplify developer productivity and streamline environment setup.",
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
            SDET - II at Diligent with hands-on experience designing robust test automation frameworks from scratch, 
            building Dockerized API mocks, and streamlining CI/CD delivery pipelines.
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
                  <span>SDET - II @ Diligent</span>
                </div>
              </div>
            </div>

            <p className={styles.profileBio}>
              With a career spanning Diligent, Testrig Technologies, and client engagements with brands like Ribbon and AIRR Labs, 
              I specialize in architecting Hybrid Test Automation Frameworks, Dockerized API mocks, and resilient CI/CD pipelines 
              that dramatically cut release cycles and elevate software quality.
            </p>

            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <Icon name="Briefcase" size={16} />
                <span>SDET - II @ Diligent (Previously Testrig Technologies)</span>
              </div>
              <div className={styles.metaItem}>
                <Icon name="MapPin" size={16} />
                <span>Bengaluru, Karnataka, India • Open to Global Roles</span>
              </div>
              <div className={styles.metaItem}>
                <Icon name="Code" size={16} />
                <span>Playwright, TypeScript, Java, Selenium, Docker, MongoDB</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <a
                href="https://www.linkedin.com/in/bitwisebro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Icon name="LinkedIn" size={18} color="#38bdf8" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/bitwisebro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Icon name="GitHub" size={18} />
                <span>GitHub</span>
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
