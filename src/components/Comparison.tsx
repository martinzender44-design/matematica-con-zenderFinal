"use client";

import { Container, SectionHeading } from "./ui";
import { COMPARISON_ROWS } from "@/data/content";

export default function Comparison() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading title="Compara las modalidades" />

        {/* Tabla — escritorio */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-navy-950/10 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-6 py-4 font-display font-semibold">
                  Característica
                </th>
                <th className="px-6 py-4 font-display font-semibold">Grupal</th>
                <th className="px-6 py-4 font-display font-semibold text-gold">
                  Individual
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-navy-950/[0.02]"}
                >
                  <td className="px-6 py-4 font-medium text-navy-950">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-navy-900/75">{row.grupal}</td>
                  <td className="px-6 py-4 font-semibold text-navy-950">
                    {row.individual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tarjetas — móvil */}
        <div className="mt-12 space-y-4 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-navy-950/10 p-5"
            >
              <p className="font-display text-sm font-bold text-navy-950">
                {row.label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-navy-900/50">
                    Grupal
                  </p>
                  <p className="mt-1 text-sm text-navy-900/80">{row.grupal}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-blue-electric">
                    Individual
                  </p>
                  <p className="mt-1 text-sm text-navy-900/80">
                    {row.individual}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
