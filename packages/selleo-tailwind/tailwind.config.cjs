/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    spacing: {
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
    colors: {
      white: '#ffffff',
      black: '#2F3033',
      neutral: {
        100: '#ff6d2a',
        200: '#eaeaeb',
        300: '#bfc0c4',
        400: '#95979d',
        500: '#696b72',
        600: '#4c4d52',
      },
    },
    letterSpacing: {
      normal: '0.01em',
    },
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#ff6d2a',
            100: '#fff8f5',
            200: '#ffeae0',
            400: '#ff905d',
            500: '#ff6d2a',
            600: '#e25718',
          },
          secondary: {
            DEFAULT: '#2aaef4',
            100: '#f3f7fc',
            200: '#5ac0f6',
            500: '#2aaef4',
            600: '#3871a5'
          },
        },
      }
    },
  },
  plugins: [],
};
