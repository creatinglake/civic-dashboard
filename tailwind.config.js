/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'civic-green': '#386759',
        'civic-teal': '#294B52',
        'civic-rust': '#C37B51',
        'civic-yellow': '#EDC572',
        'civic-cream': '#F0EBE1',
      },
      fontFamily: {
        'heading': ['"Libre Franklin"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
