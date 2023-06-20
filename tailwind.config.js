/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {

      mobile:"430px",
      mtablet:"768px",
      tablet: "1200px",
      desktop: "1024px",
      desktopl:"1440px"
    },

    extend: {
      boxShadow:{
        mybox:'0px 0px 10px #aeaeae',
      
      
      },
      boxShadow:{
        myshadow:'0px 0px 4px 5px  #f1ebfd',


      }
,
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
