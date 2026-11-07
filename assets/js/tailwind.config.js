tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff4ee',
          100: '#ffe4d5',
          200: '#fdc4a8',
          400: '#f37f4f',
          500: '#e2582b',
          600: '#c9461c',
          700: '#a33616',
        },
        ink: {
          50: '#f6f3fa',
          100: '#ebe5f3',
          300: '#b7a7cc',
          500: '#6f5a8a',
          700: '#3a2352',
          800: '#2a1640',
          900: '#1f0f33',
          950: '#160a26',
        },
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(31, 15, 51, 0.25)',
      },
    },
  },
};
