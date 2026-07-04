import { timeline } from '../data';

const Experience = () => {
  return (
    <section className="section split-section" id="experience">
      <div className="section-heading sticky-heading" data-reveal>
        <p className="eyebrow">Experience</p>
        <h2>Senior engineer mindset, hands-on execution.</h2>
        <p>
          Currently contributing at Wissen Technology in fintech product engineering with a focus
          on .NET 10 microservices, service modernization, and resilience patterns, backed by
          prior backend experience at Enablistar Pvt Ltd and Zeus Learning in high-traffic APIs,
          distributed logging, event-driven pipelines, database performance, and secure service
          architecture.
        </p>
      </div>
      <div className="timeline" data-reveal>
        {timeline.map((item, index) => (
          <article key={index} className="timeline-item">
            <time>{item.period}</time>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
