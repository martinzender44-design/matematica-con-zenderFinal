"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "./ui";
import { METHODOLOGY_STEPS } from "@/data/content";

export default function Methodology() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-navy-950 py-24">
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[110px]"
      />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Metodología"
          title="Una metodología clara para avanzar con seguridad"
        />

        <div className="relative mt-16">
          {/* Línea guía (el "hilo dorado") */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-blue-bright/40 to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2" />

          <div className="space-y-10 lg:hidden">
            {METHODOLOGY_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex gap-5 pl-2"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-gold font-display text-sm font-bold text-gold">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-mist">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {METHODOLOGY_STEPS.map((s, i) => {
              const onRight = i % 2 === 1;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className={onRight ? "lg:translate-y-10" : ""}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                    <span className="font-heading text-3xl font-extrabold text-gold">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-mist">{s.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg font-semibold text-white">
          El objetivo es que el estudiante dependa cada vez menos de la
          explicación y pueda resolver con mayor autonomía.
        </p>
      </Container>
    </section>
  );
}
