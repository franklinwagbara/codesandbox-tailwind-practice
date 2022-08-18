/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#f3693c",
        secondary: "#b2a6d3",
      }),

      fontFamily: {
        king: ["KingandQueenDemo"],
      },
    },
  },
  plugins: [],
};
