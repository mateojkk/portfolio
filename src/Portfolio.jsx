import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { CONTACT_LINKS, PROJECTS, STACK } from "./constants";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pf-app">
      <nav className="pf-nav" data-scrolled={scrolled ? "true" : "false"}>
        <span className="pf-brand">MATEOINRL</span>
        <div className="pf-nav-links">
          {["work", "about", "contact"].map((section) => (
            <a key={section} href={`#${section}`} className="pf-link pf-nav-link">
              {section}
            </a>
          ))}
        </div>
      </nav>

      <section className="pf-hero">
        <div className="pf-hero-content">
          <p className="pf-kicker">Founder · Developer · CTO · Product Engineer </p>
          <h1 className="pf-title">
            Building things
            <br />
            people <em className="pf-title-em">actually</em> use.
          </h1>
          <p className="pf-hero-copy">
            I design and ship consumer products at the intersection of AI, crypto,
            and everyday usability.
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
              href="https://twitter.com/mateoinrl"
              target="_blank"
              rel="noreferrer"
              className="pf-btn-outline"
            >
              @MATEOINRL on X
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
        <p className="pf-section-label">Selected Projects</p>
        <div className="pf-projects-grid">
          {PROJECTS.map((project) => (
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
              I&apos;m a <strong className="pf-strong">founder and CTO</strong>{" "}
              finishing my CS degree. I build consumer-facing products in the
              web3, web2 and AI space.
              <br />
              <br />
              I&apos;m a vocal voice in the L1/L2 ecosystem and believe the best
              products are the ones that remove friction completely.
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
        <span className="pf-footer-meta">MATEOINRL · 2026</span>
      </footer>
    </div>
  );
}
