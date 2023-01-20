/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['sofia-pro', ...defaultTheme.fontFamily.sans],
      'sofia-pro-soft': ['sofia-pro-soft', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '14px',
      sm: '16px',
      base: '18px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '56px',
      xxxl: '72px'
    },
    spacing: {
      0: 0,
      0.5: "4px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "72px",
      7: "96px",
      8: "144px",
      9: "192px",
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      touch: {
        raw: 'not ((any-hover: hover) or (any-pointer: fine))'
      }
    },
    extend: {
      borderWidth: {
        3: '3px'
      },
      colors: {
        brand: {
          primary: {
            100: '#fff8f5',
            200: '#ffeae0',
            400: '#ff905d',
            500: '#ff6d2a', //DEFAULT
            600: '#e25718',
          },
          secondary: {
            100: '#f3f7fc',
            200: '#5ac0f6',
            500: '#2aaef4', //DEFAULT
            600: '#3871a5'
          },
        },
        white: '#ffffff',
        black: '#2F3033',
        danger: '#E81B2F',
        neutral: {
          100: '#f4f5f5',
          200: '#eaeaeb',
          300: '#bfc0c4',
          400: '#95979d',
          500: '#696b72',
          600: '#4c4d52',
        },
      },
      letterSpacing: {
        normal: '0.01em',
        wide: '0.15em'
      },
      lineHeight: {
        tight: '21px',
        relaxed: '1.75'
      },
      fontWeight: {
        black: 800
      },
      screens: {
        touch: {
          raw: 'not ((any-hover: hover) or (any-pointer: fine))'
        }
      }
    },
  },
  plugins: [],
};
