/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/**/*.twig",
    "./resources/js/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'vsm': {'max': '500px'}
    }
  },
  plugins: [],
}

