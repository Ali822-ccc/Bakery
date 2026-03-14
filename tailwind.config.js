/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: 'rgb(255 253 208)',
          50: 'rgb(254 254 246)',
        },
        brown: {
          DEFAULT: 'rgb(107 68 35)',
          100: 'rgb(210 194 164)',
        },
        gold: {
          DEFAULT: 'rgb(218 165 32)',
          light: 'rgb(250 213 165)',
        }
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
