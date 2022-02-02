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
        'pri': '#040730',
        // 'pri': '#08081c',
        'pri-dark': '#140a4d',
        'sec': '#f07218 ',
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
