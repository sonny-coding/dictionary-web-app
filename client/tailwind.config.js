/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#050505",
        black2: "#1f1f1f",
        black3: "#2d2d2d",
        black4: "#3a3a3a",
        gray1: "#757575",
        gray2: "#e9e9e9",
        gray3: "#f4f4f4",
        white: "#ffffff",
        purple: "#e445ed",
        red: "#ff5252",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      backgroundImage: {
        search: 'url("./src/assets/images/icon-search.svg")',
      },
      backgroundPosition: {
        "right-4": "right 2rem center",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
