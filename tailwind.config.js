module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Poppins', 'Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-blue': '#010718',
        'dark-blue-light': '#070F28',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
