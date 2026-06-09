/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'light': '#F4F1DE',
          'light-alt': '#E0DCC2',
          'dark': '#0B132B',
          'dark-alt': '#1C2541',
          'accent': '#10B981',
          'accent-dark': '#059669',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
