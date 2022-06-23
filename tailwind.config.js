/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        customteal: '#008080',
        customlightgray: '#D2D2D2',
      },
      fontFamily: {
        Lora: ["Lora", "serif"]
      }
    },
  },
  plugins: [],
}
