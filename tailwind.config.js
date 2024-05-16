/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          lg: "1500px",
        },
      },
    },
  },
  plugins: [],
};
