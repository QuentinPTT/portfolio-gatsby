/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: `#0D1117`,
        light_blue: `#1b2430`,
        nuxt: `#00c58e`,
        reactjs: `#61dafb`,
      },
    },
  },
  plugins: [],
}
