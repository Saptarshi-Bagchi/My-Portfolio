import { skillGroups } from "../data.js";

function Skills() {
  return (
    // Skills
    <section id="skills" className="skills-section numbered-section fade-up">
      <p className="section-label">03 / Skills</p>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div
            className="brutalist-card skill-card"
            key={group.name}
          >
            <h3 className="skill-title">{group.name}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span
                  className="tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
