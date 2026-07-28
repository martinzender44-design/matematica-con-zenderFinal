"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { WHAT_YOU_GET } from "@/data/content";

export default function WhatYouGet() {
  return (
    <section className="bg-navy-950 py-24">
      <Container>
        <SectionHeading light title="¿Qué recibirás?" />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3.5 sm:grid-cols-2">
          {WHAT_YOU_GET.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
            >
              <CheckCircle2 className="h-5 w-5 flex-none text-gold" />
              <span className="text-sm text-ink-mist">{item}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
