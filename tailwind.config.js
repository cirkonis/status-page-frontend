const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
