/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xxs: '280px',
      lxs: '300px',
      xs: '400px',
      phone: '500px',
      tablet: '640px',
      ltab: '780px',
      xtab: '960px',
      ltop: '1050px',
      desktop: '1280px',
    }
  },
  plugins: [],
}
