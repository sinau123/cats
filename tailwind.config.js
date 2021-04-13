const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs-only': { max: '639px' },
      'sm-only': { min: '640px', max: '767px' },
      'md-only': { min: '768px', max: '1023px' },
      'lg-only': { min: '1024px', max: '1279px' },
      'xl-only': { min: '1280px', max: '1535px' },
      ...defaultTheme.screens,
    },
    boxShadow: {
      '3xl': '0px 11px 25px -8px rgba(0,0,0,0.78)',
      ...defaultTheme.boxShadow,
    },
    fontFamily: {
      playfair: ['Playfair Display, cursive'],
      sourcepro: ['Source Sans Pro, cursive'],
      montserrat: ['Montserrat', 'cursive'],
      ...defaultTheme.fontFamily,
    },
    spacing: {
      112: '28rem',
      128: '32rem',
      144: '36rem',
      168: '42rem',
      192: '48rem',
      ...defaultTheme.spacing,
    },
    textColor: (theme) => ({
      'red-theme': '#f15958',
      'pink-theme': '#FBEAEC',
      'green-theme': '#103c3b',
      facebook: '#1877F2',
      instagram: '#E4405F',
      ...theme('colors'),
    }),
    backgroundColor: (theme) => ({
      'red-theme': '#f15958',
      'pink-theme': '#FBEAEC',
      'green-theme': '#103c3b',
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      'red-theme': '#f15958',
      'pink-theme': '#FBEAEC',
      'green-theme': '#103c3b',
      ...theme('colors'),
    }),
  },
  variants: {
    extend: {
      padding: ['last'],
    },
  },
  plugins: [
    // https://github.com/iunteq/tailwindcss-textshadow
    require('tailwindcss-textshadow'),
  ],
}
