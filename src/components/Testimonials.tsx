"use client";

// NOTA INTERNA PARA EL DESARROLLADOR:
// No publicar testimonios ficticios. Reemplazar el contenido de
// TESTIMONIALS en src/data/site-config.ts únicamente con comentarios
// reales y autorizados por los estudiantes o padres de familia.

import { Quote } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { TESTIMONIALS } from "@/data/site-config";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading title="Experiencias de estudiantes y familias" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-navy-950/15 bg-navy-950/[0.02] p-7"
            >
              <Quote className="h-6 w-6 text-gold" />
              <p className="mt-4 text-sm italic text-navy-900/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-5 font-display text-sm font-bold text-navy-950">
                {t.name}
              </p>
              <p className="text-xs text-navy-900/50">{t.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
