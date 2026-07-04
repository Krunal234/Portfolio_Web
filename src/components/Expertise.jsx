import { skills } from '../data';

const Expertise = () => {
  return (
    <section className="section" id="expertise">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Core Expertise</p>
        <h2>Backend depth with production instincts.</h2>
      </div>
      <div className="skill-board" data-reveal>
        {skills.map((skill, index) => (
          <article key={index} className="skill-card" style={{ '--accent': skill.accent }}>
            <h3>{skill.title}</h3>
            <p>{skill.body}</p>
            <ul>
              {skill.tags.map((tag, tagIndex) => (
                <li key={tagIndex}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
