"use client";

import { motion } from "framer-motion";
import { Brain, Puzzle, MessagesSquare } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { VALUE_PILLARS } from "@/data/content";

const ICONS = [Brain, Puzzle, MessagesSquare];

export default function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-electric/20 blur-[100px]"
      />
      <Container className="relative">
        <SectionHeading
          light
          title="Aprende a comprender, modelar e interpretar"
          subtitle={
            <>
              Matemáticas: Aplicaciones e Interpretación no consiste
              únicamente en memorizar fórmulas. El curso busca que el
              estudiante utilice las matemáticas y la tecnología para
              analizar información, representar situaciones reales,
              construir modelos y justificar conclusiones.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-electric to-blue-bright">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-ink-mist">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
