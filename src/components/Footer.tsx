export default function Footer() {
  return (
    <footer className="footer-wrap">
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "1rem",
          color: "var(--muted)",
          letterSpacing: "-0.02em",
        }}
      >
        Atlas<span style={{ color: "var(--accent)" }}>.</span>Systems
      </span>

      <span
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          fontFamily: "var(--font-dm)",
        }}
      >
        © 2026 — Atlas Systems
      </span>

      <span
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          fontFamily: "var(--font-dm)",
        }}
      >
        Builder. Designer. Automatizador.
      </span>
    </footer>
  )
}
