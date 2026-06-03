"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "4rem" }}
    >
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
          <div
            style={{ width: "2rem", height: "2px", background: "var(--accent)" }}
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
            Trabalhos recentes
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
            marginBottom: "0.75rem",
          }}
        >
          Projetos em produção.
        </h2>

        <p
          style={{
            color: "var(--muted)",
            fontFamily: "var(--font-dm)",
            fontWeight: 300,
            maxWidth: "480px",
          }}
        >
          Cada projeto é construído com código custom, arquitetura pensada para
          escala e IA integrada onde faz sentido.
        </p>
      </motion.div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
          >
            <ProjectCard project={project} reverse={i === 1} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
