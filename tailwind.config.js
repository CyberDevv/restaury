// tailwind.config.js
// const colors = require('tailwindcss/colors')

module.exports = {
  future: {},
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C7AD88",
        secondary: "#2D2F31",
        light: "#dddddd",
        secndaryLight: "#333333",
        secondaryLighter: "#666666",
        dark: "#222222",
      },
    },
    fontFamily: {
      cookie: ["Cookie", "cursive"],
    },
  },
  variants: {},
  plugins: [],
}