/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        teal: { DEFAULT: '#3A7A8A', light: '#4A8A9A', dark: '#2A6A7A' },
        orange: { DEFAULT: '#C96A3A', light: '#D97A4A', dark: '#B95A2A' },
      },
    },
  },
  plugins: [],
}
