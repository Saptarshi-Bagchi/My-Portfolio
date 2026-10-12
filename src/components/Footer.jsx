import { site } from "../data.js";
import { trackEvent } from "../analytics.js";

function Footer() {
  return (
    // Footer
    <footer id="contact" className="footer">
      <div className="content-narrow footer-inner">
        <h2 className="footer-title">Let&apos;s connect</h2>
        <p className="footer-description">
          Have an opportunity, idea, or question? Reach out through email or
          find me online.
        </p>
        <div className="footer-links">
          <a
            className="footer-link"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <a
            className="footer-link"
            href={site.github}
            onClick={() => trackEvent('social_link_click', { platform: 'github' })}
          >
            GitHub ↗
          </a>
          <a
            className="footer-link"
            href={site.linkedin}
            onClick={() => trackEvent('social_link_click', { platform: 'linkedin' })}
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
