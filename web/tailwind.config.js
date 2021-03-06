module.exports = {
  purge: ['src/**/*.js', 'src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      dark: '#282a36',
      light: '#f3f3f3',
      white: '#ffffff',
      comment: '#6272a4',
      cursor: '#f8f8f0',
      number: '#6D8A88',
      purple: '#bd93f9',
      pink: '#ff79c6',
      green: '#50fa7b',
      blue: '#66d9ef',
      orange: '#ffb86c',
      yellow: '#f1fa8c',
      github: '#333333',
    },
    fontFamily: {
      body: [
        'Heebo',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      heading: [
        '"Fira Code"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      margin: {
        '-wrap': '-5.62vw',
        '-wrap-1/2': '-2.81vw',
      },
      padding: {
        wrap: '5.62vw',
        'wrap-1/2': '2.81vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
