/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E1E8EF',
          100: '#D4DEE7',
          200: '#B7C7D7',
          300: '#99B0C7',
          400: '#7C99B6',
          500: '#5E82A6',
          600: '#4C6B8A',
          700: '#3C546C',
          800: '#2C3D4F',
          900: '#1B2631',
          950: '#141C24',
        },
        accent: {
          50: '#FAF5F0',
          100: '#F4ECE1',
          200: '#E8D6BF',
          300: '#DDC2A2',
          400: '#D2AF84',
          500: '#C69963',
          600: '#B78343',
          700: '#926835',
          800: '#6C4D28',
          900: '#4B351B',
          950: '#382814',
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary-50': theme('colors.primary.50'),
          '--color-primary-100': theme('colors.primary.100'),
          '--color-primary-200': theme('colors.primary.200'),
          '--color-primary-300': theme('colors.primary.300'),
          '--color-primary-400': theme('colors.primary.400'),
          '--color-primary-500': theme('colors.primary.500'),
          '--color-primary-600': theme('colors.primary.600'),
          '--color-primary-700': theme('colors.primary.700'),
          '--color-primary-800': theme('colors.primary.800'),
          '--color-primary-900': theme('colors.primary.900'),
          '--color-primary-950': theme('colors.primary.950'),
          '--color-accent-50': theme('colors.accent.50'),
          '--color-accent-100': theme('colors.accent.100'),
          '--color-accent-200': theme('colors.accent.200'),
          '--color-accent-300': theme('colors.accent.300'),
          '--color-accent-400': theme('colors.accent.400'),
          '--color-accent-500': theme('colors.accent.500'),
          '--color-accent-600': theme('colors.accent.600'),
          '--color-accent-700': theme('colors.accent.700'),
          '--color-accent-800': theme('colors.accent.800'),
          '--color-accent-900': theme('colors.accent.900'),
          '--color-accent-950': theme('colors.accent.950'),
        },
      })
    },
  ],
};
