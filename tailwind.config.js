/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cartagena-gold': '#F4A261',
        'cartagena-blue': '#2A9D8F',
        'cartagena-sand': '#E9C46A',
        'cartagena-dark': '#264653',
        'cartagena-terra': '#E76F51',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}