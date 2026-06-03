"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  {
    icon: "⚡",
    name: "Frontend",
    desc: "React, Next.js, HTML/CSS/JS, animações, WebGL, Three.js",
  },
  {
    icon: "🔧",
    name: "Backend",
    desc: "Node.js, APIs REST, integrações, webhooks, automações",
  },
  {
    icon: "🤖",
    name: "IA & Automação",
    desc: "n8n, Gemini, ElevenLabs, pipelines de dados, agentes",
  },
  {
    icon: "🚀",
    name: "Deploy",
    desc: "Vercel, Netlify, VPS, Docker, EasyPanel, CI/CD",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="sobre"
      ref={ref}
      style={{
        padding: "6rem 4rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "2px",
              background: "var(--accent)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-dm)",
            }}
          >
            Sobre mim
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}
        >
          Builder. Não só dev.
        </h2>

        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1rem",
            fontFamily: "var(--font-dm)",
            fontWeight: 300,
          }}
        >
          Sou desenvolvedor fullstack com foco em produtos que têm impacto real.
          Não entrego apenas código — entrego sistemas que funcionam, convertem e
          escalam. Do briefing ao deploy, passo a passo.
        </p>
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.7,
            fontFamily: "var(--font-dm)",
            fontWeight: 300,
          }}
        >
          Trabalho com as stacks mais modernas e integro IA em todo o pipeline:
          automação de processos, geração de conteúdo, análise de dados e
          experiências inteligentes para o usuário final.
        </p>
      </motion.div>

      {/* Right — skill grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--border)",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            style={{
              padding: "1.75rem",
              background: "var(--surface)",
              borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--surface2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--surface)")
            }
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>
              {skill.icon}
            </div>
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--text)",
                marginBottom: "0.4rem",
              }}
            >
              {skill.name}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                lineHeight: 1.55,
                fontFamily: "var(--font-dm)",
              }}
            >
              {skill.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
