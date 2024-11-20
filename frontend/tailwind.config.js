/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#f7f3f0",
          200: "#f0e1d9",
          300: "#e2cbb7",
          400: "#d4b395",
          500: "#c69d73",
          600: "#b28a5f",
          700: "#8f6d4f",
          800: "#6c5040",
          900: "#4a342f",
        },
      },
    },
    plugins: [],
  },
};
