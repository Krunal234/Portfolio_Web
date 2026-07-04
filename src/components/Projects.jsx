import { useState } from 'react';
import { projects } from '../data';

const Projects = () => {
  const [openIndices, setOpenIndices] = useState(new Set());

  const toggleProject = (index) => {
    const newOpenIndices = new Set(openIndices);
    if (newOpenIndices.has(index)) {
      newOpenIndices.delete(index);
    } else {
      newOpenIndices.add(index);
    }
    setOpenIndices(newOpenIndices);
  };

  return (
    <section className="section" id="projects">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Showcase</p>
        <h2>Expandable case studies for recruiter attention.</h2>
      </div>
      <div className="project-grid" data-reveal>
        {projects.map((project, index) => {
          const isOpen = openIndices.has(index);
          return (
            <article
              key={index}
              className={`project-card ${isOpen ? 'is-open' : ''}`}
              tabIndex="0"
              onClick={() => toggleProject(index)}
            >
              <div>
                <div className="project-top">
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  <button
                    type="button"
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${project.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProject(index);
                    }}
                  >
                    {isOpen ? '-' : '+'}
                  </button>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-details">
                  <div><p>{project.detail}</p></div>
                </div>
              </div>
              <ul>
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
