/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'mainbg': 'hsl(233, 47%, 7%)',
      'cardbg': 'hsl(244, 38%, 16%)',
      'accent': 'hsl(277, 64%, 61%)',
      'main': 'hsl(0, 0%, 100%)',
      'mainp': 'hsla(0, 0%, 100%, 0.75)',
      'stat': 'hsla(0, 0%, 100%, 0.6)'
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Lexend': ['Lexend Deca', 'sans-serif']
    }
  },
  plugins: [],
}
