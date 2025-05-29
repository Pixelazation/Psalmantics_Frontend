/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#CC9900",
        red: "#7E0021",
        green: "#314004"
      },
    },
    fontFamily: {
      roboto: "Roboto",
      bookman: ['"Libre Baskerville"', 'Georgia', 'serif'],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};