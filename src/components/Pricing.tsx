"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Users, User } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { PRICING, buildWhatsAppLink } from "@/data/site-config";

const GROUP_FEATURES = [
  "Máximo 4 estudiantes",
  "60 minutos por sesión",
  "Clases virtuales en vivo",
  "Participación activa",
  "Resolución de dudas",
  "Material de práctica",
  "Ejercicios tipo examen",
  "Retroalimentación durante la clase",
];

const INDIVIDUAL_FEATURES = [
  "Atención 1 a 1",
  "60 minutos por sesión",
  "Clase adaptada a tus necesidades",
  "Refuerzo de temas específicos",
  "Resolución de dudas personales",
  "Ritmo personalizado",
  "Material de práctica",
  "Retroalimentación individual",
];

export default function Pricing() {
  return (
    <section id="precios" className="bg-ink-mist/30 py-24">
      <Container>
        <SectionHeading
          eyebrow="Modalidades"
          title="Selecciona la modalidad que mejor se adapte a ti"
          subtitle="Clases virtuales de 60 minutos con material, explicación y resolución de dudas."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Grupal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-2xl border border-navy-950/10 bg-white p-8 shadow-sm"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-electric/10 px-3 py-1 text-xs font-semibold text-blue-electric">
              <Users className="h-3.5 w-3.5" /> {PRICING.grupal.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy-950">
              {PRICING.grupal.label}
            </h3>

            <ul className="mt-6 space-y-2.5">
              {GROUP_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-navy-900/75">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-blue-electric" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-navy-950/8 pt-6">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold text-gold">
                  {PRICING.grupal.currency} {PRICING.grupal.pricePerClass}
                </span>
                <span className="text-sm text-navy-900/60">por estudiante</span>
              </div>

              <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-4">
                <p className="font-display text-sm font-bold text-navy-950">
                  Paquete destacado: {PRICING.grupal.packageClasses} clases por{" "}
                  {PRICING.grupal.currency} {PRICING.grupal.packagePrice}
                </p>
                <p className="mt-1 text-xs font-medium text-navy-900/60">
                  Ahorras {PRICING.grupal.currency} {PRICING.grupal.savings} frente
                  a cuatro clases sueltas.
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("grupal")}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 font-display text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-electric"
            >
              <MessageCircle className="h-4 w-4" />
              Quiero la modalidad grupal
            </a>
            <p className="mt-3 text-center text-xs text-navy-900/50">
              Consulta los grupos y horarios disponibles.
            </p>
          </motion.div>

          {/* Individual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col rounded-2xl border-2 border-gold bg-navy-950 p-8 shadow-card"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
              <User className="h-3.5 w-3.5" /> {PRICING.individual.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white">
              {PRICING.individual.label}
            </h3>

            <ul className="mt-6 space-y-2.5">
              {INDIVIDUAL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-mist">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold text-gold">
                  {PRICING.individual.currency} {PRICING.individual.pricePerClass}
                </span>
                <span className="text-sm text-ink-mist">por clase</span>
              </div>

              <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-4">
                <p className="font-display text-sm font-bold text-white">
                  Paquete destacado: {PRICING.individual.packageClasses} clases
                  por {PRICING.individual.currency} {PRICING.individual.packagePrice}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-mist">
                  Ahorras {PRICING.individual.currency} {PRICING.individual.savings} frente
                  a cuatro clases sueltas.
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("individual")}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-display text-sm font-semibold text-navy-950 shadow-goldGlow transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Reservar clase individual
            </a>
            <p className="mt-3 text-center text-xs text-ink-soft">
              Consulta disponibilidad y coordina tu primera sesión.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
