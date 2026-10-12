import { useState } from "react";
import { navigation, site } from "../data.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Navigation
    <header className="navbar">
      <nav
        className="navbar-inner"
        aria-label="Main navigation"
      >
        <a href="#top" className="navbar-brand">
          {site.initials}
        </a>
        <button
          className="navbar-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <div className={`navbar-links${menuOpen ? " is-open" : ""}`}>
          {navigation.map((item) => (
            <a
              className="navbar-link"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
