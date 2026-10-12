import { projects } from "../data.js";
import { trackEvent } from "../analytics.js";

function Projects() {
  return (
    // Projects
    <section id="projects" className="projects-section numbered-section fade-up">
      <p className="section-label">05 / Projects</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="brutalist-card project-card"
            key={project.title}
          >
            {project.image ? (
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="project-image project-placeholder">
                {project.title.charAt(0)}
              </div>
            )}
            <h3 className="project-title">
              {project.title}
            </h3>
            <p className="project-description">
              {project.description}
            </p>
            <div className="project-tags">
              {project.tech.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="project-link"
                href={project.githubLink}
                onClick={() => trackEvent('project_click', { project: project.title, link_type: 'github' })}
              >
                GitHub ↗
              </a>
              <a
                className="project-link"
                href={project.liveLink}
                onClick={() => trackEvent('project_click', { project: project.title, link_type: 'live_demo' })}
              >
                Live demo ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
