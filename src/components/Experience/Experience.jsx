import { useState } from "react";
import styles from "./Experience.module.css";
import historyData from "../../data/history.json";
import { Icon } from "../common/Icons";

export const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only current role by default (Diligent) to save page scrolling length
  const visibleExperiences = isExpanded ? historyData : historyData.slice(0, 1);
  const remainingCount = historyData.length - 1;

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <Icon name="Briefcase" size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>
            Track record of driving test architecture, reducing release cycle time,
            and delivering robust software at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {visibleExperiences.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              {/* Timeline marker */}
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {idx < visibleExperiences.length - 1 && <div className={styles.markerLine}></div>}
              </div>

              {/* Experience Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleGroup}>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.companyName}>{item.organisation}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>
                        <Icon name="MapPin" size={12} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className={styles.badgeGroup}>
                    <span className={styles.dateBadge}>
                      <Icon name="Calendar" size={12} />
                      {item.startDate} — {item.endDate}
                    </span>
                    <span className={`${styles.typeBadge} ${item.type === "Full-Time" ? styles.typeFullTime : styles.typeIntern}`}>
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Experiences Bullet Points */}
                <ul className={styles.experienceList}>
                  {item.experiences.map((exp, expIdx) => (
                    <li key={expIdx} className={styles.experienceBullet}>
                      <span className={styles.bulletCheck}>
                        <Icon name="Check" size={12} />
                      </span>
                      <span className={styles.bulletText}>{exp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className={styles.techStack}>
                  <span className={styles.techLabel}>Technologies:</span>
                  <div className={styles.techPills}>
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.techPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {remainingCount > 0 && (
          <div className={styles.toggleWrapper}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleBtn}
              aria-expanded={isExpanded}
            >
              <span>
                {isExpanded
                  ? "Show Recent Experience Only"
                  : `View Full Career Journey (${remainingCount} earlier ${remainingCount === 1 ? "role" : "roles"})`}
              </span>
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
