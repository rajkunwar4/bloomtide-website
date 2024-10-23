/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      MontserratAlternates: ["Montserrat Alternates", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
      PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      SegoeUI: ["Segoe UI", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}