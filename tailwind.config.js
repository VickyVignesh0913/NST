/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        canvas: '#010102',
        surface1: '#0f1011',
        surface2: '#141516',
        surface3: '#18191a',
        hairline: '#23252a',
        accent: '#5e6ad2',
        'accent-hover': '#828fff',
        'text-primary': '#f7f8f8',
        'text-secondary': '#d0d6e0',
        'text-muted': '#8a8f98',
        'text-dim': '#62666d',
      },
      animation: {
        'fade-rise': 'fade-rise 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-rise': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}