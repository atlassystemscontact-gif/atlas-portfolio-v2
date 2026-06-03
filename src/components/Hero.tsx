"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 4rem 0",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow radial */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Availability badge — linha separada, alinhada à direita */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "0.4rem 1rem",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-dm)",
                lineHeight: 1,
              }}
            >
              Disponível para projetos
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ color: "var(--text)", display: "block" }}>
            Interfaces que
          </span>
          <span style={{ color: "var(--muted)", display: "block" }}>
            vendem.
          </span>
          <span style={{ color: "var(--text)", display: "block" }}>
            Sistemas que
          </span>
          <span style={{ color: "var(--muted)", display: "block" }}>
            escalam.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{
            color: "var(--muted)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            fontFamily: "var(--font-dm)",
            fontWeight: 300,
            fontSize: "1.05rem",
          }}
        >
          Construo produtos digitais de ponta a ponta — desde o design até o
          deploy. Especialista em automação com IA, plataformas SaaS e
          experiências que convertem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.9rem",
              background: "var(--accent)",
              color: "#000",
              padding: "0.85rem 2rem",
              display: "inline-block",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            style={{
              fontFamily: "var(--font-dm)",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "var(--muted)",
              padding: "0.85rem 2rem",
              border: "1px solid var(--border)",
              display: "inline-block",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement
              el.style.color = "var(--text)"
              el.style.borderColor = "var(--border-hover)"
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement
              el.style.color = "var(--muted)"
              el.style.borderColor = "var(--border)"
            }}
          >
            Conversar sobre seu projeto ↗
          </a>
        </motion.div>
      </div>

      {/* Stats — absolute right */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        style={{
          position: "absolute",
          right: "4rem",
          bottom: "6rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {[
          { value: "3+", label: "Produtos lançados" },
          { value: "100%", label: "Custom code" },
          { value: "IA", label: "Em todo stack" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1.8rem",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginTop: "0.25rem",
                fontFamily: "var(--font-dm)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>


<style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
