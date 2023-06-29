/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue_unam': {
          '50': '#e4f8ff',
          '100': '#cff1ff',
          '200': '#a8e3ff',
          '300': '#74ceff',
          '400': '#3ea5ff',
          '500': '#137bff',
          '600': '#006aff',
          '700': '#006aff',
          '800': '#005fe4',
          '900': '#0043b0',
          '950': '#002b7a',
        },
        'golden_unam': {
          '50': '#fdfae9',
          '100': '#fcf5c5',
          '200': '#faea8e',
          '300': '#f7d74d',
          '400': '#f2c11d',
          '500': '#d59f0f',
          '600': '#c3830b',
          '700': '#9c5d0c',
          '800': '#814a12',
          '900': '#6e3c15',
          '950': '#401e08',
        },
        'orange_unam':{
          '50': '#fffcea',
          '100': '#fff4c4',
          '200': '#ffe984',
          '300': '#ffd644',
          '400': '#ffc219',
          '500': '#ff9f00',
          '600': '#e47600',
          '700': '#b84e00',
          '800': '#993d07',
          '900': '#7e3209',
          '950': '#481800',
      },
      'blue_ica': {
        '50': '#e9fffc',
        '100': '#c9fff7',
        '200': '#99fff4',
        '300': '#54ffef',
        '400': '#07fff4',
        '500': '#00ebef',
        '600': '#00bcc9',
        '700': '#0095a1',
        '800': '#087682',
        '900': '#0c616d',
        '950': '#004f5c',
    },
    'blue_low_ica': {
      '50': '#e8fffc',
      '100': '#c5fff7',
      '200': '#92ffef',
      '300': '#47ffe5',
      '400': '#00ffe5',
      '500': '#00fbff',
      '600': '#00c7d7',
      '700': '#009dac',
      '800': '#008492',
      '900': '#056674',
      '950': '#004551',
  },
  'green_ica': {
    '50': '#effaf5',
    '100': '#d8f3e5',
    '200': '#b4e6ce',
    '300': '#83d2b2',
    '400': '#50b790',
    '500': '#2c9571',
    '600': '#1f7c5e',
    '700': '#18644d',
    '800': '#164f3e',
    '900': '#134134',
    '950': '#09251e',
},
'orange_ica': {
  '50': '#fef7ee',
  '100': '#fdedd7',
  '200': '#fad7ae',
  '300': '#f6ba7b',
  '400': '#f29245',
  '500': '#ee7421',
  '600': '#cf5415',
  '700': '#b94415',
  '800': '#933719',
  '900': '#772f17',
  '950': '#40160a',
}
  



      },
      fontFamily:{

        'faustina': [ 'Faustina', 'serif' ],
        'robo': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

