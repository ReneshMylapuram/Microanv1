/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#171e19',
        sage: '#b7c6c2',
        paper: '#a7c29f',
        mist: '#b7c6c2',
        ink: '#171e19',
      },
      fontFamily: {
        sans: ['Satoshi', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        soft: '12px',
        bubble: '12px',
      },
      boxShadow: {
        soft: '8px 8px 0 #000000',
        card: '4px 4px 0 #000000',
      },
    },
  },
  plugins: [],
};
