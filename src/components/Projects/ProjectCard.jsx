import styles from "./ProjectCard.module.css";
import { Icon } from "../common/Icons";

  export const ProjectCard = ({ project }) => {
    const { title, category, description, highlights, skills, demo, source, badge } = project;

    return (
        <div className={styles.card}>
          {/* Card Header */}
          <div className={styles.cardTop}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryBadge}>{category}</span>
              {badge && <span className={styles.featureBadge}>{badge}</span>}
            </div>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gitLink}
              aria-label={`View ${title} source on GitHub`}
            >
              <Icon name="GitHub" size={18} />
            </a>
          </div>

          {/* Title & Description */}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

                  {/* Key Architectural Highlights */}
                  {highlights && highlights.length > 0 && (
        <ul className={styles.highlightsList}>
          {highlights.map((item, idx) => (
            <li key={idx} className={styles.highlightItem}>
              <span className={styles.highlightDot}>
                <Icon name="Check" size={11} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Skills / Tech Stack Tags */}
      <div className={styles.skills}>
        {skills.map((skill, idx) => (
          <span key={idx} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>

      {/* Card Action Links */}
      <div className={styles.actions}>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryLink}
        >
          <Icon name="Code" size={15} />
          <span>Source Code</span>
          <Icon name="ArrowUpRight" size={13} />
        </a>
        {demo && demo !== source && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryLink}
          >
            <span>Live Demo</span>
            <Icon name="ExternalLink" size={13} />
          </a>
        )}
      </div>
    </div>
                  );
};
