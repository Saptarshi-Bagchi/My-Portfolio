import { site } from "../data.js";
import { trackEvent } from "../analytics.js";

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
            href="#contact"
            className="brutalist-button button-primary"
          >
            Contact Me
          </a>
          <a
            href="SBagchi_CV.pdf"
            download
            className="brutalist-button button-secondary"
            onClick={() => trackEvent('resume_download')}
          >
            Download Resume
            <svg className="download-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
