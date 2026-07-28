"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Compass,
  Video,
  Calculator,
  FolderOpen,
  ListChecks,
  Users,
  LucideIcon,
} from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { BENEFITS } from "@/data/content";

const ICON_MAP: Record<string, LucideIcon> = {
  FileSearch,
  Compass,
  Video,
  Calculator,
  FolderOpen,
  ListChecks,
  Users,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-ink-mist/30 py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="¿Por qué elegir Matemática con Zender?"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = ICON_MAP[b.icon];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-navy-950/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 transition-colors group-hover:bg-blue-electric">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-navy-900/70">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
