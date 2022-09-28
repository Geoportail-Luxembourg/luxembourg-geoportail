/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'main-primary': '#2980b9',
        'main-secondary': '#97bbd3',
        'main-tertiary': '#1f5d87',
      },
      fontFamily: {
        sans: 'DINNextLTPro-Condensed, Arial, sans-serif',
        body: 'DINNextLTPro-Condensed, Arial, sans-serif',
      },
      fontSize: {
        'title-xl': ['40px', '40px'],
      },
      boxShadow: {
        header: '0px 2px 6px -1px rgb(0 0 0 / 50%)',
      },
    },
  },
  plugins: [],
};
