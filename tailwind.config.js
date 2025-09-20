/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxe-gold': '#D4AF37',
        'luxe-black': '#AEB5BD',
        'luxe-white': '#F5F5F5',
        'emerald': '#046307',
        'sapphire': '#0F52BA',
        'ruby': '#E0115F',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
}