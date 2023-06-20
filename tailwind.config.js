/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0359a0",
        secondary: "#fef1e6",
        background: "#ffffff",
      },
      fontFamily: {
        barlow: ["Barlow Condensed"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
