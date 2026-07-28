"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { IMAGES, TEACHER_STATS } from "@/data/site-config";

const STATS = [
  { icon: GraduationCap, value: TEACHER_STATS.yearsExperience, label: "años de experiencia docente" },
  { icon: Users, value: TEACHER_STATS.studentsPrepared, label: "estudiantes acompañados" },
  { icon: BookOpen, value: TEACHER_STATS.teachingHours, label: "horas de clases impartidas" },
  { icon: Award, value: TEACHER_STATS.resourcesCreated, label: "recursos y materiales desarrollados" },
];

export default function Trust() {
  return (
    <section id="contacto" className="bg-ink-mist/30 py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-navy-950/10 shadow-card">
            <Image
              src={IMAGES.authorityPhoto}
              alt="Profesor de Matemática con Zender"
              width={480}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Autoridad y experiencia"
            title="¿Por qué confiar en Matemática con Zender?"
            subtitle="Las clases son dirigidas por un docente especializado en matemáticas, con experiencia en el Programa del Diploma y en la preparación de estudiantes para evaluaciones académicas exigentes."
          />

          <div className="mt-10 grid grid-cols-2 gap-5">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-navy-950/8 bg-white p-5"
              >
                <Icon className="h-5 w-5 text-blue-electric" />
                <p className="mt-3 font-heading text-2xl font-extrabold text-gold">
                  {value}
                </p>
                <p className="mt-1 text-xs text-navy-900/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
