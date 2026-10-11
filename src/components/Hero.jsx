import { site } from "../data.js";

function Hero() {
  return (
    // Hero
    <section id="top" className="hero hero-screen fade-up">
      <div className="hero-content">
        <p className="section-label">Hello, I&apos;m</p>
        <h1 className="hero-title">
          {site.name}
        </h1>
        <p className="hero-role">
          {site.title}
        </p>
        <p className="hero-tagline">
          {site.tagline}
        </p>
        <div className="hero-actions">
          <a
            href="#projects"
            className="brutalist-button button-primary"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="brutalist-button button-secondary"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
