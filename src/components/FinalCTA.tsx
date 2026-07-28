"use client";

import { MessageCircle } from "lucide-react";
import { Container, MathBackground, PrimaryButton, SecondaryButton } from "./ui";
import { buildWhatsAppLink } from "@/data/site-config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-blue-electric/40 py-24">
      <MathBackground />
      <Container className="relative text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          ¿Listo para prepararte con mayor confianza?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-mist">
          Reserva tu clase y comienza a fortalecer tu comprensión, tu
          estrategia de resolución y tu capacidad para interpretar problemas
          matemáticos.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="#precios">Reservar mi clase</PrimaryButton>
          <SecondaryButton href={buildWhatsAppLink("general")}>
            <MessageCircle className="h-4 w-4" />
            Escribir por WhatsApp
          </SecondaryButton>
        </div>

        <p className="mt-5 text-sm text-ink-soft">
          Consulta horarios, modalidad y disponibilidad.
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
          Clases virtuales · 60 minutos · Grupal o individual
        </p>
      </Container>
    </section>
  );
}
