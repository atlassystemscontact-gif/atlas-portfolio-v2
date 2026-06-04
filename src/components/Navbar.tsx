"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="nav-wrap"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
          background: scrolled || menuOpen ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          transition: "background 0.3s ease",
        }}
      >
        <a
          href="#"
          aria-label="Atlas Systems — início"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Atlas<span style={{ color: "var(--accent)" }}>.</span>Systems
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-desktop-link"
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                transition: "color 0.2s",
                fontFamily: "var(--font-dm)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="nav-cta"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.8rem",
              background: "var(--accent)",
              color: "#000",
              padding: "0.5rem 1.25rem",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Contratar
          </a>
        </div>

        {/* Hamburger — only visible on mobile via CSS */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text)",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text)",
              transition: "opacity 0.25s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text)",
              transition: "transform 0.25s",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={close}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "0.9rem",
            background: "var(--accent)",
            color: "#000",
            padding: "0.7rem 1.5rem",
            display: "inline-block",
            alignSelf: "flex-start",
            letterSpacing: "0.02em",
            marginTop: "0.25rem",
          }}
        >
          Contratar
        </a>
      </div>
    </>
  )
}
