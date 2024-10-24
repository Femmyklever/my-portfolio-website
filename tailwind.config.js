/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",   
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#666'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        alata: ['Alata', 'Open Sans', 'Lato']
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
}

