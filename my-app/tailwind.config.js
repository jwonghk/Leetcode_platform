/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          layer: {
            1: 'rgb(40, 40, 40)',
            2: 'rgb(65, 179, 220)',
          },
          label: {
            2: 'rgba(239, 241, 246, 0.75)',
          },
          divider: {
            border: {
              2: 'rgb(61, 61, 61)',
            },
          },
          fill: {
            2: 'hsla(0, 0%, 100%, 0.14)',
            3: 'hsla(0, 0%, 100%, 0.1)',
          },
          gray: {
            6: 'rgb(138, 138, 138)',
            7: 'rgb(179, 179, 179)',
            8: 'rgb(219, 219, 219)',
          },
          yellow: 'rgb(255, 192, 30)',
          pink: 'rgb(255, 55, 95)',
          green: {
            s: 'rgb(44, 187, 93)',
          },
          blue: {
            s: 'rgb(10, 132, 255)',
          },
        },
        gray: {
          8: 'rgb(38, 38, 38)',
        },
        brand: {
          orange: 'rgb(255, 161, 22)',
          orangeS: 'rgb(193, 122, 15)',
        },
        olive: 'rgb(0, 184, 163)',
      },
    },
  },
  plugins: [],
};
