/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        'highlight-red': '#E63946',
        'bg-white': '#F1FAEE',
        'light-blue': '#A8DADC',
        'medium-blue': '#457B9D',
        'dark-blue': '#1D3557'
      },
    },
  },
  plugins: [],
}