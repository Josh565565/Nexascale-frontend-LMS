/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        atypTest: ['AtypTest', 'sans-serif'],
      },
      colors: {
        'nexa-black': '#1f1d1d',
        'nexa-yellow-800': '#ff9a2b',
        'nexa-yellow-500': 'ffb930',
        'nexa-yellow-200': '#ffdc73',
        'nexa-green': '#59A96A',
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
