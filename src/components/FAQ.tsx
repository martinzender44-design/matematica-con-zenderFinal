"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { FAQS } from "@/data/content";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-mist/30 py-24">
      <Container>
        <SectionHeading eyebrow="Dudas frecuentes" title="Preguntas frecuentes" />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-950/8 rounded-2xl border border-navy-950/8 bg-white shadow-sm">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-semibold text-navy-950 sm:text-base">
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 flex-none text-blue-electric transition-transform duration-300",
                      isOpen && "rotate-45"
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
                      <p className="px-6 pb-6 text-sm leading-relaxed text-navy-900/70">
                        {faq.a}
                      </p>
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
