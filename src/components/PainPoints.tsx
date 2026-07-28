"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { PAIN_POINTS } from "@/data/content";

export default function PainPoints() {
  return (
    <section className="relative bg-white py-24">
      <Container>
        <SectionHeading
          title="¿Te sucede algo de esto?"
          subtitle="Muchos estudiantes conocen las fórmulas, pero aun así tienen dificultades cuando deben interpretar y aplicar las matemáticas."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="flex gap-3 rounded-2xl border border-navy-950/8 bg-navy-950/[0.02] p-5 shadow-sm"
            >
              <AlertCircle className="h-5 w-5 flex-none text-blue-electric" />
              <p className="text-sm text-navy-900/80">{point}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg font-semibold text-navy-950">
          El problema no siempre es la falta de capacidad. Muchas veces es la
          falta de una estrategia clara, práctica guiada y retroalimentación
          oportuna.
        </p>
      </Container>
    </section>
  );
}
