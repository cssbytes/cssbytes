module.exports = {
  purge: ['src/**/*.js', 'src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-wrap': '-5.62vw',
      },
      padding: {
        wrap: '5.62vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
