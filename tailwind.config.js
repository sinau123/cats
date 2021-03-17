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
    fontFamily: {
      pota: ['Potta One, cursive'],
      ...defaultTheme.fontFamily,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // https://github.com/iunteq/tailwindcss-textshadow
    require('tailwindcss-textshadow'),
  ],
}
