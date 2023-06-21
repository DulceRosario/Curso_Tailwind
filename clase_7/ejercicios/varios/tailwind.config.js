/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'clay': {
            '50': '#f5f5f1',
            '100': '#e6e4db',
            '200': '#cfcab9',
            '300': '#b3aa91',
            '400': '#9d9072',
            '500': '#928467',
            '600': '#796a55',
            '700': '#625546',
            '800': '#55483e',
            '900': '#4a4039',
            '950': '#2a221e',
        },
      },
    },
  },
  plugins: [],
}

