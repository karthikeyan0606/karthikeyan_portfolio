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
        bg: "#050505",
        card: "#101010",
        primary: "#00e5ff",
        secondary: "#7c3aed",
        accent: "#00ffa3",
        ink: "#ffffff",
        muted: "#a1a1aa",
        border: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
}
