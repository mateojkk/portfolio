import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { CONTACT_LINKS, PROJECTS, STACK } from "./constants";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const categories = ["All", "Web3", "AI", "Tools"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="pf-app">
      <nav className="pf-nav" data-scrolled={scrolled ? "true" : "false"}>
        <h1 className="pf-brand">MATEO</h1>
        <div className="pf-nav-links">
          {["work", "about", "contact"].map((section) => (
            <a key={section} href={`#${section}`} className="pf-link pf-nav-link">
              {section}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="pf-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </nav>

      <section className="pf-hero">
        <div className="pf-hero-content">
          <p className="pf-kicker">Developer · Product Engineer · Creator</p>

          <p className="pf-hero-copy">
            I build consumer applications across crypto and AI, and create content around AI, crypto, and stablecoins, including sponsored technical deep-dives and casual posts for anyone.
          </p>
          <div className="pf-hero-actions">
            <a
              href="https://github.com/mateojkk"
              target="_blank"
              rel="noreferrer"
              className="pf-btn-primary"
            >
              View GitHub →
            </a>
            <a
              href="https://twitter.com/mateojk_"
              target="_blank"
              rel="noreferrer"
              className="pf-btn-outline"
            >
              @MATEOJK_ on X
            </a>
          </div>
        </div>

        <div className="pf-hero-photo-wrap">
          <img
            src="/hero-photo.jpg"
            alt="Profile artwork"
            className="pf-hero-photo"
          />
        </div>
      </section>

      <div className="pf-divider" />

      <section id="work" className="pf-section">
        <div className="pf-section-header">
          <p className="pf-section-label">Selected Projects</p>
          <div className="pf-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pf-filter-btn ${activeCategory === cat ? "pf-filter-btn-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="pf-projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="pf-github-cta">
          <div>
            <p className="pf-github-title">More on GitHub</p>
            <p className="pf-github-copy">
              Explore all public repos, experiments, and open-source work.
            </p>
          </div>
          <a
            href="https://github.com/mateojkk"
            target="_blank"
            rel="noreferrer"
            className="pf-btn-outline"
          >
            github.com/mateojkk →
          </a>
        </div>
      </section>

      <div className="pf-divider" />

      <section id="about" className="pf-section">
        <p className="pf-section-label">About & Stack</p>
        <div className="pf-about-grid">
          <div>
            <p className="pf-about-copy">
              I&apos;m a <strong className="pf-strong">solo developer, product engineer, and creator</strong> finishing my CS degree.
              <br />
              <br />
              I build consumer applications across crypto and AI, and create content around AI, crypto, and stablecoins, including sponsored technical deep-dives and casual posts for anyone.
            </p>
          </div>
          <div>
            {STACK.map((row, index) => (
              <div
                key={row.cat}
                className={`pf-stack-row ${
                  index < STACK.length - 1 ? "pf-stack-row-border" : ""
                }`}
              >
                <span className="pf-stack-cat">{row.cat}</span>
                <span className="pf-stack-items">{row.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      <section id="contact" className="pf-section">
        <p className="pf-section-label">Get in Touch</p>
        <div className="pf-contact-wrap">
          <p className="pf-contact-copy">
            Open to conversations about products, funding, collaborations, or
            just interesting ideas. Reach out directly.
          </p>
          <div className="pf-contact-links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pf-contact-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <span className="pf-footer-meta">MATEO · 2026</span>
      </footer>
    </div>
  );
}
