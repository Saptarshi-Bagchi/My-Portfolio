import { about } from "../data.js";

function About() {
  return (
    // About
    <section
      id="about"
      className="about-section numbered-section fade-up"
    >
      <div className="content-narrow about-grid">
        <div>
          <p className="section-label">01 / About</p>
          <h2 className="section-title">{about.heading}</h2>
          <p className="about-text">{about.text}</p>
        </div>
        <div>
          <h3 className="section-subtitle">
            {about.accomplishmentsHeading}
          </h3>
          <ul className="accomplishments">
            {about.accomplishments.map((item) => (
              <li className="accomplishment" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
