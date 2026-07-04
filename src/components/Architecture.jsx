import { architecture } from '../data';

const Architecture = () => {
  return (
    <section className="section systems-section" id="systems">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Architecture</p>
        <h2>Designed for scale, change, and observability.</h2>
      </div>
      <div className="system-map" data-reveal>
        <div className="pipeline" aria-label="Backend architecture flow">
          <span>Client Apps</span>
          <i></i>
          <span>.NET APIs</span>
          <i></i>
          <span>Domain Services</span>
          <i></i>
          <span>SQL + Cache</span>
          <i></i>
          <span>Event Bus</span>
        </div>
        <div className="architecture-grid">
          {architecture.map((item, index) => (
            <article key={index} className="architecture-card" style={{ '--accent': item.accent }}>
              <h3><strong>//</strong> {item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
