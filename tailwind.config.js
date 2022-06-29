/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        customteal: '#008080',
        customlightgray: '#D2D2D2',
        customgray: '#ddd',
        customdropdownback: '#f9f9f9',
        customdarkteal: '#005050'
      },
      fontFamily: {
        Lora: ["Lora", "serif"]
      },
      screens: {
        'mdnav': '1100px'
      },
      height: {
        '80vh': '80vh'
      },
      width: {
        '41rem': '41rem'
      },
      margin: {
        '4.30rem': '4.30rem'
      },
      gridTemplateColumns: {
        'customcolumns': '75% 25%'
      }
    },
  },
  plugins: [],
}
