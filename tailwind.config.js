/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "#03050d",
        card: "#0a1120",
        primary: "#3b82f6",
        secondary: "#1d4ed8",
        accent: "#38bdf8",
        ink: "#ffffff",
        muted: "#94a3b8",
        border: "rgba(148,163,184,0.12)",
      },
    },
  },
  plugins: [],
}
