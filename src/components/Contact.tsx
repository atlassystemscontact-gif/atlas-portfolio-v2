"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const contactLinks = [
  {
    name: "Email",
    href: "mailto:atlassystems.contact@gmail.com",
    label: "atlassystems.contact@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/atlas-systems-875aa740b",
    label: "linkedin.com/in/atlas-systems",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/atlas.systemss?igsh=Y2Zvc3NwMG54c2d2&utm_source=qr",
    label: "@atlas.systemss",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5511930534679",
    label: "+55 (11) 93053-4679",
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contato" ref={ref} className="contact-section">
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
            Contato
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
            marginBottom: "1rem",
          }}
        >
          Tem um projeto?
        </h2>

        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.65,
            fontFamily: "var(--font-dm)",
            fontWeight: 300,
            marginBottom: "2.5rem",
            maxWidth: "380px",
          }}
        >
          Vamos conversar sobre o que você precisa construir. Respondo em até 24h
          e já trago ideias iniciais para a call.
        </p>

        <div>
          {contactLinks.map((link, i) => (
            <ContactLink
              key={link.name}
              link={link}
              isLast={i === contactLinks.length - 1}
            />
          ))}
        </div>
      </motion.div>

      {/* Right — form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="type" style={labelStyle}>Tipo de projeto</label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="" disabled>Selecione...</option>
            <option value="landing">Landing Page / Site</option>
            <option value="saas">Plataforma SaaS</option>
            <option value="ai">Automação com IA</option>
            <option value="ecommerce">E-commerce</option>
            <option value="consulting">Consultoria</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Conte sobre seu projeto..."
            required
            rows={5}
            style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            background: "var(--accent)",
            color: "#000",
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "0.9rem",
            padding: "1rem",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          Enviar mensagem →
        </button>
      </motion.form>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  color: "var(--muted)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontFamily: "var(--font-dm)",
  marginBottom: "0.6rem",
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "1px solid var(--border)",
  padding: "0.9rem 1rem",
  color: "var(--text)",
  fontFamily: "var(--font-dm)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
}

function ContactLink({
  link,
  isLast,
}: {
  link: { name: string; href: string; label: string }
  isLast: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${link.name}: ${link.label}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.1rem 0",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        color: hovered ? "var(--accent)" : "var(--text)",
        transition: "color 0.2s",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 600,
          fontSize: "0.95rem",
        }}
      >
        {link.name}
      </span>
      <span
        style={{
          transform: hovered ? "translate(4px, -4px)" : "translate(0, 0)",
          transition: "transform 0.2s",
          fontSize: "1rem",
        }}
      >
        ↗
      </span>
    </a>
  )
}
