import { education } from "../data.js";

function Education() {
  return (
    // Education
    <section id="education" className="education-section numbered-section fade-up">
      <div className="content-narrow">
        <p className="section-label">02 / Education</p>
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={`${item.institution}-${item.qualification}`}>
              <div className="education-header">
                <div>
                  <p className="education-level section-label">{item.level}</p>
                  <h3 className="education-title">{item.qualification} · {item.institution}</h3>
                </div>
                <p className="education-date section-label">{item.dates}</p>
              </div>
              <p className="education-field">{item.field}</p>
              <p className="education-details">{item.details}</p>
              <div className="education-meta">
                {item.grade ? <span>{item.grade}</span> : null}
                <span>{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
