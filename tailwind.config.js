/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "1200px",
      desktop: "1024px",
      desktopl:"1440px"
    },

    extend: {
      colors: {
        avaliye: "#7636ed",
        sanaviye: "#f1ebfd",
      },
      height: {
        78: "4.875rem",
      },
    },
  },
  plugins: [],
};
