"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sigma } from "lucide-react";
import { Container, PrimaryButton } from "./ui";
import { NAV_LINKS } from "@/data/content";
import { BRAND } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-electric to-blue-bright">
            <Sigma className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold text-white">
            {BRAND.logoText}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-ink-mist transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton href="#precios" className="px-6 py-2.5 text-sm">
            Reservar mi clase
          </PrimaryButton>
        </div>

        <button
          className="text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-sm font-medium text-ink-mist hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <PrimaryButton href="#precios" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Reservar mi clase
            </PrimaryButton>
          </Container>
        </div>
      )}
    </header>
  );
}
