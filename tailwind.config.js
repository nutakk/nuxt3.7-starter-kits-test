/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

module.exports = {
  important: true,
  content: [
    './src/**/*.{html,js}', 
    // './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "lucide"]),
    }),
  ],
}

