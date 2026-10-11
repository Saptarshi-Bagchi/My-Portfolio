import { navigation, site } from "../data.js";

function Navbar() {
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
        <div className="navbar-links">
          {navigation.map((item) => (
            <a
              className="navbar-link"
              href={item.href}
              key={item.href}
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
