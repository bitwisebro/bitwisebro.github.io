import { useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { Icon } from "../common/Icons";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    "All",
    "Automation & QA",
    "Languages & Core",
    "DevOps & Cloud",
    "Databases",
    "Tools & Workflow",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsExpanded(false);
  };

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const INITIAL_COUNT = 8;
  const visibleSkills = isExpanded ? filteredSkills : filteredSkills.slice(0, INITIAL_COUNT);
  const canToggle = filteredSkills.length > INITIAL_COUNT;

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
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {visibleSkills.map((skill, idx) => (
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

        {/* Expand / Collapse Toggle Button */}
        {canToggle && (
          <div className={styles.toggleWrapper}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleBtn}
              aria-expanded={isExpanded}
            >
              <span>
                {isExpanded
                  ? "Show Fewer Skills"
                  : `Show All Skills (${filteredSkills.length})`}
              </span>
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
