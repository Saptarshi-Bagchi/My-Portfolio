import { experience } from "../data.js";

function Experience() {
  return (
    // Experience
    <section
      id="experience"
      className="experience-section numbered-section fade-up"
    >
      <div className="content-narrow">
        <p className="section-label">04 / Experience</p>
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.role}`}
            >
              <div className="experience-header">
                <h3 className="experience-title">
                  {item.role} · {item.company}
                </h3>
                <p className="experience-date section-label">{item.dates}</p>
              </div>
              <p className="experience-description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
