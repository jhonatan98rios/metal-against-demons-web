/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-menu': "url('/img/menu/header-bg.png')",
        'done-pact': "url('/img/menu/done-pact-bg.png')",
        'undone-pact': "url('/img/menu/undone-pact-bg.png')"
      }
    },
  },
  plugins: [],
}