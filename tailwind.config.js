const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Recursive', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pri': '#08081c',
        'pri-dark': '#140a4d',
        'sec': '#ef9c00',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
