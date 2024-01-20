/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-menu': "url('/img/menu/header-bg.png')",
      }
    },
  },
  plugins: [],
}