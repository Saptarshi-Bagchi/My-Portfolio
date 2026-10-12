import { accomplishments } from "../data.js";

function Accomplishments() {
  return (
    // Accomplishments
    <section id="accomplishments" className="accomplishments-section numbered-section fade-up">
      <p className="section-label">05 / Accomplishments</p>
      <h2 className="section-title">Accomplishments</h2>
      <div id="accomplishments-container" className="accomplishments-list">
        {accomplishments.map((item) => (
          <article className="accomplishment-item" key={item.title}>
            <h3 className="accomplishment-title">
              {item.highlight ? <span className="accomplishment-highlight">{item.highlight} — </span> : null}
              {item.title}
            </h3>
            <p className="accomplishment-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Accomplishments;
