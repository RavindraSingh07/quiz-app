/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'silk':['Silkscreen', 'cursive'],
        'rubik':['Rubik Marker Hatch', 'cursive'],
        'oswald':['Oswald']
      }
    },
  },
  plugins: [],
}