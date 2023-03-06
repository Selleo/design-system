/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/selleo-design-core/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        code: "#1E1E1E",
      },
    },
  },
  plugins: [],
  presets: [require("@selleo/tailwind/tailwind.config.cjs")],
};
