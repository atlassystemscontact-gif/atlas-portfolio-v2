"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4rem",
        borderBottom: "1px solid var(--border)",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
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

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {[
          { label: "Sobre", href: "#sobre" },
          { label: "Projetos", href: "#projects" },
          { label: "Serviços", href: "#servicos" },
          { label: "Contato", href: "#contato" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
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
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Contratar
        </a>
      </div>
    </nav>
  )
}
