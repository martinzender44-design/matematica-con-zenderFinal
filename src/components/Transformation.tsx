"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { TRANSFORMATION } from "@/data/content";

export default function Transformation() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          title="De la confusión a una estrategia clara"
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-navy-950/8 bg-navy-950/[0.02] p-8"
          >
            <h3 className="font-display text-lg font-bold text-navy-950/60">
              Antes
            </h3>
            <ul className="mt-4 space-y-3">
              {TRANSFORMATION.before.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-900/70">
                  <X className="mt-0.5 h-4 w-4 flex-none text-navy-950/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden justify-center lg:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold">
              <ArrowRight className="h-6 w-6 text-navy-950" />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gold/30 bg-navy-950 p-8 shadow-card"
          >
            <h3 className="font-display text-lg font-bold text-gold">
              Después
            </h3>
            <ul className="mt-4 space-y-3">
              {TRANSFORMATION.after.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-mist">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-navy-900/60">
          Resultados sujetos al compromiso, práctica y proceso de cada
          estudiante.
        </p>
      </Container>
    </section>
  );
}
