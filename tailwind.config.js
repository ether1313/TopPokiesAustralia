/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Open Sans"', 'sans-serif'],
        lilita: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
