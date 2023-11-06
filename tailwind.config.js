/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2490dc",
        "primary-dark": "#14467b",
        "primary-green-light": "#61C554",
        grey: "#F3F3F3",
        "grey-text": "#858C95",
        background: "#f0f3f5",
      },
      fontFamily: {
        inter: ["Inter"], //Occassional usage
      },
      screens: {
        xs: "480px",
        sm: "600px",
        mlg: "930px", //medium large... this is between large and medium
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
