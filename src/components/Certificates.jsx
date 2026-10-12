import { certificates } from "../data.js";

function Certificates() {
  return (
    // Certificates
    <section id="certificates" className="certificates-section numbered-section fade-up">
      <p className="section-label">06 / Certificates</p>
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="brutalist-card certificate-card" key={certificate.title}>
            {certificate.image ? (
              <img
                className="certificate-image"
                src={certificate.image}
                alt={certificate.title}
                loading="lazy"
              />
            ) : (
              <div className="certificate-image certificate-placeholder" aria-label={`${certificate.title} placeholder`}>
                {certificate.title.charAt(0)}
              </div>
            )}
            <h3 className="certificate-title">{certificate.title}</h3>
            <p className="certificate-issuer">{certificate.issuer}</p>
            {certificate.certificateId ? (
              <p className="certificate-id">Certificate ID: {certificate.certificateId}</p>
            ) : null}
            {certificate.link ? (
              <a className="certificate-link" href={certificate.link} target="_blank" rel="noopener noreferrer">View Certificate ↗</a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
