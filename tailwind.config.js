const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pri': '#040730',
        // 'pri': '#08081c',
        'pri-dark': '#140a4d',
        'dark': '#040410',
        'sec': '#f07218 ',
        'light': '#535361'
      },
    },
  },
  // variants: {
  //   scrollbar: ['rounded'],
  //   extend: {
  //     borderWidth: ['hover', 'focus'],
  //     transform: ['group-hover', 'hover', 'focus'],
  //     rotate: ['group-hover'],
  //     scale: ['group-hover'],
  //     display: ['group-hover'],
  //     width: ['group-hover'],
  //   },
  // },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
