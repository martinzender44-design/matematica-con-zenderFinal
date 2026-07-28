import type { Metadata } from "next";
import { Poppins, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SEO, BRAND, WHATSAPP_NUMBER } from "@/data/site-config";
import { FAQS } from "@/data/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: {
    canonical: SEO.path,
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.path,
    siteName: BRAND.name,
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: SEO.url,
    logo: `${SEO.url}/images/og-image.jpg`,
    telephone: `+${WHATSAPP_NUMBER}`,
    description: SEO.description,
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Matemáticas: Aplicaciones e Interpretación — Nivel Medio",
    description: SEO.description,
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      sameAs: SEO.url,
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Clases particulares de matemáticas",
    provider: {
      "@type": "Organization",
      name: BRAND.name,
    },
    areaServed: "PE",
    description: SEO.description,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
