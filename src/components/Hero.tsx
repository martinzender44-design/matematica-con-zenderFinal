"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle, Users2, Video, Sparkles } from "lucide-react";
import { Container, MathBackground, PrimaryButton, SecondaryButton } from "./ui";
import { IMAGES, buildWhatsAppLink } from "@/data/site-config";

const CHECKLIST = [
  "Clases virtuales en vivo",
  "Explicaciones paso a paso",
  "Ejercicios tipo examen",
  "Estrategias de resolución",
  "Uso de calculadora gráfica",
  "Grupos de máximo 4 estudiantes",
];

const MINI_BADGES = [
  { icon: Video, label: "Clases en vivo" },
  { icon: Sparkles, label: "Atención especializada" },
  { icon: Check, label: "Material incluido" },
  { icon: Users2, label: "Grupal e individual" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 bg-radial-navy pt-28 pb-16"
    >
      <MathBackground />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-bright/20 blur-[120px]"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold font-display">
            Preparación especializada para el Programa del Diploma
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            Domina Matemáticas:{" "}
            <span className="text-gold">Aplicaciones e Interpretación</span>{" "}
            Nivel Medio
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-mist">
            Prepárate para las evaluaciones internacionales con clases
            virtuales enfocadas en comprender los conceptos, interpretar
            problemas reales y resolver ejercicios con una estrategia clara.
          </p>

          <p className="mt-3 max-w-xl font-display text-base font-semibold text-white/90">
            Menos memorización. Más comprensión, aplicación y seguridad al
            resolver.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink-mist">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-electric/20">
                  <Check className="h-3.5 w-3.5 text-blue-bright" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#precios">Reservar mi clase</PrimaryButton>
            <SecondaryButton href={buildWhatsAppLink("general")}>
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </SecondaryButton>
          </div>

          <p className="mt-4 text-sm text-ink-soft">
            Consulta horarios y disponibilidad sin compromiso.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {MINI_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-xs font-medium text-ink-soft"
              >
                <Icon className="h-4 w-4 text-blue-bright" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Columna derecha: composición visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto hidden max-w-md lg:block"
        >
          <div className="relative rounded-xl2 border border-white/10 bg-navy-900/60 p-3 shadow-card backdrop-blur">
            <div className="overflow-hidden rounded-2xl border-2 border-gold/40">
              <Image
                src={IMAGES.heroTeacher}
                alt="Profesor de Matemática con Zender explicando en una clase virtual"
                width={640}
                height={720}
                priority
                className="h-[440px] w-full object-cover"
              />
            </div>
          </div>

          {/* Tarjeta flotante: gráfica de función */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-8 w-48 rounded-2xl border border-white/10 bg-navy-900/90 p-4 shadow-card backdrop-blur"
          >
            <svg viewBox="0 0 120 60" className="w-full">
              <polyline
                points="0,50 20,20 40,45 60,10 80,35 100,5 120,30"
                fill="none"
                stroke="#FFC400"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-1 font-display text-xs font-semibold text-ink-mist">
              f(x) = interpretar → aplicar
            </p>
          </motion.div>

          {/* Tarjeta flotante: calculadora gráfica */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -right-6 flex w-44 items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/90 p-4 shadow-card backdrop-blur"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-electric/20">
              <span className="font-display text-base font-bold text-blue-bright">fx</span>
            </div>
            <p className="font-display text-xs font-semibold text-ink-mist">
              Calculadora gráfica CG50 / GII / GIII
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
