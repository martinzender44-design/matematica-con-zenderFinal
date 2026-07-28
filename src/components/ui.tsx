import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-bright/30 bg-blue-bright/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-bright font-display">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg",
            light ? "text-ink-mist" : "text-navy-800/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-display text-sm font-semibold text-navy-950 shadow-goldGlow transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_45px_rgba(255,196,0,0.4)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    className
  );
  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  href,
  children,
  className,
  light = true,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 font-display text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    light
      ? "border-white/30 text-white hover:bg-white/10 focus-visible:outline-white"
      : "border-navy-900/20 text-navy-950 hover:bg-navy-950/5 focus-visible:outline-navy-900",
    className
  );
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return <button className={classes}>{children}</button>;
}

/** Fondo decorativo con cuadrícula tipo plano cartesiano y fórmulas sutiles. */
export function MathBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-grid-lines bg-[size:44px_44px]",
        className
      )}
    >
      <div className="absolute -left-10 top-10 font-heading text-6xl font-bold text-white/[0.05] animate-drift select-none">
        f(x) = ax² + bx + c
      </div>
      <div className="absolute right-0 top-1/3 font-heading text-5xl font-bold text-white/[0.04] animate-drift select-none [animation-delay:2s]">
        ∫ f(x) dx
      </div>
      <div className="absolute left-1/4 bottom-10 font-heading text-4xl font-bold text-white/[0.04] animate-drift select-none [animation-delay:4s]">
        sin θ, cos θ, tan θ
      </div>
    </div>
  );
}
