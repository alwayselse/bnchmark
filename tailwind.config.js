/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Yellow Primary Color
        yellow: {
          50: '#fffdf7',
          100: '#fffaed',
          200: '#fff4d1',
          300: '#ffecb5',
          400: '#ffe47d',
          500: '#FFD700', // Main brand yellow
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
        // Professional Grey
        grey: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b3b3b3',
          500: '#808080', // Main professional grey
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        // Keep primary for backward compatibility but update to yellow
        primary: {
          50: '#fffdf7',
          100: '#fffaed',
          200: '#fff4d1',
          300: '#ffecb5',
          400: '#ffe47d',
          500: '#FFD700',
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}