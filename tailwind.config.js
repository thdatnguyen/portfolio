const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100%',
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
      },
      colors: {
        primary: '#009048',
        primary_light: '#f5edda',
        secondary: '#2bb41a',
        secondary_light: '#81d357',
        secondary_dark: '#b4b274',
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
