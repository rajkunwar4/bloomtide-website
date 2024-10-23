/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      MontserratAlternates: ["Montserrat Alternates", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
      PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      SegoeUI: ["Segoe UI", "sans-serif"],
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};