/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'button-bg-gray-300': '#6C9CA4',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/custom-forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            //768px
            maxWidth: '748px',
          },
          '@screen lg': {
            //1024px
            maxWidth: '1000px',
          },
          '@screen xl': {
            //1280px
            maxWidth: '1220px',
          },
        },
      })
    },
  ],
}
