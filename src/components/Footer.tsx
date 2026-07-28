import { Sigma, Instagram, Mail, MessageCircle } from "lucide-react";
import { Container } from "./ui";
import { NAV_LINKS } from "@/data/content";
import { BRAND, CONTACT, buildWhatsAppLink } from "@/data/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pb-10 pt-16 text-ink-mist">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-electric to-blue-bright">
                <Sigma className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                {BRAND.logoText}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Clases virtuales especializadas en Matemáticas: Aplicaciones e
              Interpretación Nivel Medio, para el Programa del Diploma.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Enlaces
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={buildWhatsAppLink("general")}
                  className="flex items-center gap-2 text-sm text-ink-soft hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-ink-soft hover:text-white"
                >
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-soft hover:text-white"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-ink-soft/70 md:flex-row md:items-center md:justify-between">
          <p>© {year} {BRAND.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/politica-de-privacidad" className="hover:text-white">
              Política de privacidad
            </a>
            <a href="/terminos-y-condiciones" className="hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-ink-soft/60">
          {BRAND.name} es un servicio independiente de tutoría académica y no
          está afiliado ni respaldado por la Organización del Bachillerato
          Internacional.
        </p>
      </Container>
    </footer>
  );
}
