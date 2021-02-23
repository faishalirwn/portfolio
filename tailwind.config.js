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
      minHeight: {
        '10': '10rem',
      },
      maxWidth: {
        '1/2': '50%',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(255,255,255,0.95)',
            h1: {
              color: 'rgba(255,255,255,0.95)',
            },
            h2: {
              color: 'rgba(255,255,255,0.95)',
            },
            h3: {
              color: 'rgba(255,255,255,0.95)',
            },
            h4: {
              color: 'rgba(255,255,255,0.95)',
            },
            h5: {
              color: 'rgba(255,255,255,0.95)',
            },
            h6: {
              color: 'rgba(255,255,255,0.95)',
            },
            strong: {
              color: 'rgba(255,255,255,0.95)',
            },
            blockquote: {
              color: 'rgba(255,255,255,0.95)',
            },
            a: {
              color: 'rgba(255,255,255,0.95)',
            },
            code: {
              color: 'rgba(255,255,255,0.95)',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
