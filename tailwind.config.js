/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'rosy': '#E0B0B6',
      'rose': '#A76571',
      'black': '#444444',
      'yellow': '#FdF0c6',
      'pink': '#B6465F',
      'dark-rose': '#8A4253',
      'dark-pink': '#691D2E',
      'beige': '#D9C5B6',
      'white': '#F8F7F2'
    },
    extend: {},
  },
  plugins: [],
};
