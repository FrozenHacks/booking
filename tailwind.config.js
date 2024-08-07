/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "website-offwhite": "#FBE3C2",
        "website-purple": "#8560BC",
        "website-purple-dark": "#020316",
      },
    },
  },
  plugins: [],
};
