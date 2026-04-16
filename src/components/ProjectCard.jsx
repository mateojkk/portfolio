export default function ProjectCard({ project }) {
  return (
    <div className="pf-card">
      <div className="pf-card-header">
        <span className="pf-card-name">{project.name}</span>
        <span
          className="pf-card-status"
          style={{
            background: project.statusBg,
            color: project.statusColor,
          }}
        >
          {project.status}
        </span>
      </div>

      <p className="pf-card-tagline">{project.tagline}</p>
      <p className="pf-card-desc">{project.desc}</p>

      <div className="pf-card-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="pf-card-tech-item">
            {tech}
          </span>
        ))}
      </div>

      <div className="pf-card-links">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="pf-link pf-card-link"
          >
            Live ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="pf-link pf-card-link"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}
