import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#071B33", // azul oscuro principal
          900: "#0A1F44", // azul profundo
          800: "#0B2F5B", // azul secundario
        },
        blue: {
          electric: "#007BFF",
          bright: "#139BFF",
        },
        gold: {
          DEFAULT: "#FFC400",
          light: "#FFD54A",
        },
        ink: {
          soft: "#B7C7D9", // texto secundario
          mist: "#D6E4F0", // gris claro
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-navy":
          "radial-gradient(circle at 20% 20%, rgba(19,155,255,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,196,0,0.10), transparent 40%)",
        "grid-lines":
          "linear-gradient(rgba(183,199,217,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,199,217,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(19,155,255,0.25)",
        goldGlow: "0 0 30px rgba(255,196,0,0.25)",
        card: "0 20px 60px -20px rgba(7,27,51,0.6)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(10px,-10px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
