/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Ubuntu Mono"', "sans-serif"],
        special: ["Quantico"],
      },
    },
  },
  plugins: [],
};
