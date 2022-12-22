/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "390",
      desktop: "1024px",
    },
    colors: {
      indigo: "#4f46e5",
      "dark-indigo": "#312e81",
      amber: "#fbbf24",
      "dark-amber": "#92400e",
      light: "#f5f5f5",
      dark: "#171717",
      transparent: "transparent",
    },
  },
  plugins: [],
};
