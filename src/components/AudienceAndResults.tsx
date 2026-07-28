"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { WHO_IS_THIS_FOR, EXPECTED_RESULTS } from "@/data/content";

export default function AudienceAndResults() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" title="Estas clases son para ti si…" />
          <ul className="mt-8 space-y-3.5">
            {WHO_IS_THIS_FOR.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="flex items-start gap-3 text-sm text-navy-900/75"
              >
                <Check className="mt-0.5 h-4 w-4 flex-none text-blue-electric" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading
            align="left"
            title="¿Qué habilidades podrás fortalecer?"
          />
          <p className="mt-4 text-sm text-navy-900/60">
            Las clases están orientadas a fortalecer estas habilidades. El
            estudiante desarrollará estas capacidades según su compromiso y
            práctica.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {EXPECTED_RESULTS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="flex items-start gap-2.5 rounded-xl border border-navy-950/8 bg-navy-950/[0.02] p-4"
              >
                <TrendingUp className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span className="text-sm font-medium text-navy-950">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
