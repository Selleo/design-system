/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['sofia-pro', ...defaultTheme.fontFamily.sans],
      'sofia-pro-soft': ['sofia-pro-soft', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xxxs: '10px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      base: '18px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '56px',
      xxxl: '72px',
    },
    spacing: {
      0: 0,
      0.5: '4px',
      1: '8px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '72px',
      7: '96px',
      8: '144px',
      9: '192px',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1536px',
      touch: {
        raw: 'not ((any-hover: hover) or (any-pointer: fine))',
      },
    },
    extend: {
      borderWidth: {
        3: '3px',
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
            100: '#F3F8FC',
            200: '#DFEBF6',
            500: '#5c99d2', //DEFAULT
            600: '#3871a5',
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
          hero: {
            overlay: '#2F3033',
          },
        },
        theme: {
          dark: '#1f2937',
          accent: '#3895ff',
          gray: {
            100: '#16191d',
            400: '#586474',
            800: '#c5cbd3',
            900: '#e2e5e9',
            950: '#f0f2f4',
          },
        },
      },
      ringColor: {
        brand: {
          primary: {
            100: '#fff8f5',
            200: '#ffeae0',
            400: '#ff905d',
            500: '#ff6d2a', //DEFAULT
            600: '#e25718',
          },
          secondary: {
            100: '#F3F8FC',
            200: '#DFEBF6',
            500: '#5c99d2', //DEFAULT
            600: '#3871a5',
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
          hero: {
            overlay: '#2F3033',
          },
        },
        theme: {
          dark: '#1f2937',
          accent: '#3895ff',
          gray: {
            100: '#16191d',
            400: '#586474',
            800: '#c5cbd3',
            900: '#e2e5e9',
            950: '#f0f2f4',
          },
        },
      },
      letterSpacing: {
        none: '0',
        normal: '0.01em',
        wide: '0.15em',
      },
      lineHeight: {
        tight: '21px',
        relaxed: '1.75',
        125: '125%',
        150: '150%',
        175: '175%',
      },
      fontWeight: {
        black: 800,
      },
      outlineWidth: {
        sm: '1.3333px',
      },
      outlineOffset: {
        sm: '1.3333px',
      },
      boxShadow: {
        100: '0 0 16px rgba(47, 48, 51, 0.05), 0 32px 72px rgba(47, 48, 51, 0.07)',
      },
      screens: {
        touch: {
          raw: 'not ((any-hover: hover) or (any-pointer: fine))',
        },
      },
    },
  },
  plugins: [],
};
