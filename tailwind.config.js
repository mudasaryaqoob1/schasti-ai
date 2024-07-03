/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        fontFamily:'Plus Jakarta Sans, Poppins'
      },
      colors: {
        'custom-blue': 'rgba(0, 122, 182, 1)',
      },
      colors: {
        customTextColor: 'rgba(64, 75, 90, 1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

