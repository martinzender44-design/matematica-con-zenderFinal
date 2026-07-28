"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { CURRICULUM } from "@/data/content";
import { cn } from "@/lib/utils";

export default function LearningTopics() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="temas" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Contenido del curso"
          title="¿Qué aprenderás?"
          subtitle="Contenidos organizados según el programa de Matemáticas: Aplicaciones e Interpretación Nivel Medio."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-950/8 rounded-2xl border border-navy-950/8 bg-white shadow-sm">
          {CURRICULUM.map((block, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={block.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-navy-950 sm:text-lg">
                    {block.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-none text-blue-electric transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 px-6 pb-6 sm:grid-cols-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-navy-900/75"
                          >
                            <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
