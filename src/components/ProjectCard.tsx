"use client"

import { useState } from "react"

interface Highlight {
  value: string
  label: string
}

interface Project {
  id: string
  category: string
  title: string
  subtitle: string
  accent: string
  url: string
  description: string
  tags: string[]
  highlights: Highlight[]
}

interface ProjectCardProps {
  project: Project
  reverse?: boolean
}

export default function ProjectCard({ project, reverse }: ProjectCardProps) {
  const [iframeError, setIframeError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [borderHovered, setBorderHovered] = useState(false)

  return (
    <div
      className={`project-card-wrap${reverse ? " reverse" : ""}`}
      onMouseEnter={() => setBorderHovered(true)}
      onMouseLeave={() => setBorderHovered(false)}
      style={{
        border: `1px solid ${borderHovered ? "var(--border-hover)" : "var(--border)"}`,
      }}
    >
      {/* Info side */}
      <div
        className="project-card-info"
        style={{
          background: "var(--surface)",
          padding: "3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-dm)",
              marginBottom: "1rem",
            }}
          >
            {project.id} / {project.category}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "2rem",
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            {project.title}
          </h3>

          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: project.accent,
              fontFamily: "var(--font-dm)",
              marginBottom: "1.25rem",
            }}
          >
            {project.subtitle}
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.92rem",
              lineHeight: 1.65,
              fontFamily: "var(--font-dm)",
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid var(--border-hover)",
                  padding: "0.3rem 0.8rem",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                  fontFamily: "var(--font-dm)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            {project.highlights.map((h) => (
              <div key={h.label}>
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: project.accent,
                    lineHeight: 1,
                  }}
                >
                  {h.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginTop: "0.25rem",
                    fontFamily: "var(--font-dm)",
                  }}
                >
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.title} ao vivo`}
            style={{
              display: "inline-block",
              border: `1px solid ${project.accent}4d`,
              color: project.accent,
              padding: "0.65rem 1.25rem",
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.02em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = `${project.accent}1a`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
            }}
          >
            Ver projeto ao vivo ↗
          </a>
        </div>
      </div>

      {/* Visual side */}
      <div
        className="project-card-visual"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#060606",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {iframeError ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#060606",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: project.accent,
                textAlign: "center",
                padding: "2rem",
              }}
            >
              {project.title}
            </span>
          </div>
        ) : (
          <iframe
            src={project.url}
            title={project.title}
            onError={() => setIframeError(true)}
            style={{
              width: "160%",
              height: "160%",
              transform: "scale(0.625)",
              transformOrigin: "top left",
              pointerEvents: "none",
              border: "none",
            }}
          />
        )}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "1.5rem",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.title} em nova aba`}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.85rem",
              background: "var(--accent)",
              color: "#000",
              padding: "0.7rem 1.25rem",
              display: "inline-block",
            }}
          >
            Abrir site ↗
          </a>
        </div>
      </div>
    </div>
  )
}
