/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
      },
      boxShadow: {
        glow: "0 0 40px rgba(163, 230, 53, 0.18)",
        glowSoft: "0 0 24px rgba(163, 230, 53, 0.12)",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "22px",
      },
    },
  },
  plugins: [],
};
