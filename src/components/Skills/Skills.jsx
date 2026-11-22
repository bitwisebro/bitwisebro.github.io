import { useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { Icon } from "../common/Icons";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Automation & QA",
    "Languages & Core",
    "DevOps & Cloud",
    "Databases",
    "Tools & Workflow",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <Icon name="Cpu" size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={styles.title}>Skills &amp; Technologies</h2>
          <p className={styles.subtitle}>
            A comprehensive toolkit across end-to-end automation, backend services, 
            performance benchmarking, and cloud infrastructure.
          </p>

          {/* Filter Pills */}
          <div className={styles.filterGroup}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${selectedCategory === category ? styles.filterActive : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.skillIconWrapper}>
                <Icon name={skill.icon} size={28} />
              </div>
              <div className={styles.skillDetails}>
                <div className={styles.skillHeader}>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <span className={`${styles.levelBadge} ${skill.level === "Advanced" ? styles.levelAdvanced : styles.levelProficient}`}>
                    {skill.level}
                  </span>
                </div>
                <div className={styles.skillMeta}>
                  <span className={styles.skillTag}>{skill.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
