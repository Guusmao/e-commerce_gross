export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#F05736',
          50: '#FEF2EF',
          100: '#FDE3DC',
          200: '#FBC7B8',
          300: '#F7A08A',
          400: '#F37D5F',
          500: '#F05736',
          600: '#D9451F',
          700: '#B33619',
          800: '#8C2A14',
          900: '#661E0E',
        },
        'brand-black': '#000000',
        'dark-gray-2': '#A9A9A9',
      },
    },
  },
  plugins: [],
}