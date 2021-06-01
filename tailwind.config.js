const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#214ECF',
        primary_light: '#bbd2ff',
        secondary: '#C7FF84',
        secondary_light: '#E5FEC7',
        secondary_dark: '#394726',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      spacing: {
        44: '11rem',
        60: '15rem',
      },
      letterSpacing: {
        widy: '0.010em',
      },
      fontSize: {
        '1xl': '1.35rem',
        '2_5xl': '1.65rem',
      },
      fontFamily: {
        body: ['Overpass', ...defaultTheme.fontFamily.sans],
        header: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
