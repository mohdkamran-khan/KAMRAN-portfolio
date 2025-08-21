/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables dark mode toggle with "dark" class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // set Inter as default
      },
    },
  },
  plugins: [],
};
