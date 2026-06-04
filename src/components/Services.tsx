"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const services = [
  {
    num: "01",
    name: "Landing Pages & Sites",
    desc: "Sites institucionais e landing pages de alta conversão com design premium, animações e velocidade máxima.",
  },
  {
    num: "02",
    name: "Plataformas SaaS",
    desc: "Produtos web completos com autenticação, dashboards, billing e arquitetura escalável.",
  },
  {
    num: "03",
    name: "Automação com IA",
    desc: "Pipelines inteligentes com n8n, Gemini e agentes customizados para automatizar qualquer processo.",
  },
  {
    num: "04",
    name: "Consultoria Técnica",
    desc: "Revisão de arquitetura, code review, planejamento de stack e suporte para times de desenvolvimento.",
  },
  {
    num: "05",
    name: "E-commerce",
    desc: "Lojas virtuais performáticas com integração de pagamento, estoque, automação de pedidos e SEO.",
  },
  {
    num: "06",
    name: "Conteúdo & YouTube",
    desc: "Produção de vídeos técnicos, tutoriais e conteúdo educativo sobre desenvolvimento e IA.",
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

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="servicos" ref={ref} className="services-section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ marginBottom: "3rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ width: "2rem", height: "2px", background: "var(--accent)" }} />
          <span
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-dm)",
            }}
          >
            O que eu faço
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
          }}
        >
          Serviços.
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service) => (
          <motion.div
            key={service.num}
            variants={itemVariants}
            style={{
              background: "var(--bg)",
              padding: "2.5rem",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--surface2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--accent)",
                marginBottom: "0.75rem",
              }}
            >
              {service.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text)",
                marginBottom: "0.6rem",
              }}
            >
              {service.name}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                fontFamily: "var(--font-dm)",
                fontWeight: 300,
              }}
            >
              {service.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
