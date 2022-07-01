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
        'lgxl': '2400px',
        'mdnav': '1100px',
        'svg': '1370px',
        'footerscreen': '1255px',
        'testomnial': '511px',
        'xsm': '484px',
        'sxsm': '340px'
      },
      height: {
        '80vh': '80vh',
      },
      width: {
        '32vw': '32vw'
      },
      top: {
        '-14vh': '-14vh'
      },
      inset: {
        '18': '4.5rem',
        '10.75': '10.75rem'
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
