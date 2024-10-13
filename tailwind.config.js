/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Ubuntu Mono"', "sans-serif"],
        special: ["Quantico"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#101010",
        red: "#d13333",
        green: "#12c384",
        yellow: "#e6e619",
        blue: "#2a7bcf",
        purple: "#c044c0",
        cyan: "#12b0d6",
        white: "#e7e7e7",
        brightBlack: "#707070",
        brightRed: "#f45656",
        brightGreen: "#26db96",
        brightYellow: "#f7f750",
        brightBlue: "#4394ee",
        brightPurple: "#db7cdc",
        brightCyan: "#33c3e1",
        brightWhite: "#e7e7e7",
        background: "#232323",
        foreground: "#d1d1d1",
        selectionBackground: "#414449",
        cursorColor: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
