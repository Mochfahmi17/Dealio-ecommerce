/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        marcellus: ["Marcellus"],
      },
      colors: {
        primary: "#212123",
        secondary: "#8f8f8f",
      },
    },
  },
  plugins: [],
};
