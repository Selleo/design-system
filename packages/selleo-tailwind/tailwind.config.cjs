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
    extend: {
      colors: {
				'primary-500': '#FAFAFA',
			}
    },
  },
  plugins: [],
};
