/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        grey: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
