/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'rosy': '#e0b0b6',
      'rose': '#A76571',
      'black': '#444444',
      'yellow': '#fdf0c6',
      'pink': '#b6465f',
      'dark-rose': '#8A4253',
      'dark-pink': '#691D2E'
    },
    extend: {},
  },
  plugins: [],
};
