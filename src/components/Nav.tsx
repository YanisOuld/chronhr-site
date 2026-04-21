import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const brandLogo = "/transparent_logo.png";

const links = [
  { label: "How", id: "how" },
  { label: "Tech", id: "tech" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

const NAV_OFFSET = 78;

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  function goToSection(id: string) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 80);
      return;
    }

    scrollToSection(id);
  }

  function moveUnderline(el: HTMLElement) {
    if (!navLinksRef.current) return;
    const parent = navLinksRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setUnderline({
      left: rect.left - parent.left,
      width: rect.width,
      opacity: 1,
    });
  }

  useEffect(() => {
    const el = navLinksRef.current?.querySelector(".nav-link-active") as HTMLElement | null;
    if (el) moveUnderline(el);
  }, [activeSection]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    function updateActiveSection() {
      const focusLine = window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= focusLine) current = section.id;
      }

      setActiveSection(current);
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  function handleMouseEnter(e: MouseEvent<HTMLElement>) {
    moveUnderline(e.currentTarget);
  }

  function handleMouseLeave() {
    const el = navLinksRef.current?.querySelector(".nav-link-active") as HTMLElement | null;
    if (el) moveUnderline(el);
    else setUnderline((u) => ({ ...u, opacity: 0 }));
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button
          type="button"
          className="nav-logo"
          aria-label="Chronhr home"
          onClick={() => goToSection("home")}
        >
          <img src={brandLogo} alt="Chronhr" className="nav-logo-image" />
          <span className="nav-logo-text">CHRONHR</span>
        </button>

        <ul className="nav-links" ref={navLinksRef}>
          <div
            className="nav-underline"
            style={{
              left: underline.left,
              width: underline.width,
              opacity: underline.opacity,
            }}
          />

          {links.map((link) => (
            <li key={link.id} style={{ position: "relative" }}>
              <button
                type="button"
                className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}
                onClick={() => goToSection(link.id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <Link
          to="/get-started"
          className="nav-cta"
        >
          Book a demo
        </Link>
      </div>
    </nav>
  );
}

export default Nav;