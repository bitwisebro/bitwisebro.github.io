import { useState } from "react";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Icon } from "../common/Icons";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Automation", "Backend", "Tools"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
        <section className={styles.projectsSection} id="projects">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>
                <Icon name="Code" size={14} />
                <span>Featured Work</span>
              </div>
              <h2 className={styles.title}>Engineered Projects</h2>
              <p className={styles.subtitle}>
                A showcase of automated test frameworks, backend utilities,
                and open-source developer tooling built for performance and reliability.
              </p>

              {/* Filter Pills */}
              <div className={styles.filterGroup}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className={styles.grid}>
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>

            {/* GitHub Callout Footer */}
            <div className={styles.githubCallout}>
              <div className={styles.calloutText}>
                <h4>Looking for more code repositories?</h4>
                <p>Explore all automated suites, scripts, and open-source contributions on GitHub.</p>
              </div>
              <a
                href="https://github.com/bitwisebro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calloutBtn}
              >
                <Icon name="GitHub" size={18} />
                <span>Visit @bitwisebro on GitHub</span>
                <Icon name="ArrowUpRight" size={14} />
              </a>
            </div>
          </div>
        </section>
        );
};
