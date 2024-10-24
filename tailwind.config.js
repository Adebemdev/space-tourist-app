/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   mobile: '375px', // Small phones
      //   tablet: '768px', // Tablets and small laptops
      //   laptop: '1024px', // Medium laptops and large tablets
      //   desktop: '1440px', // Desktops
      //   largeDesktop: '1920px', // Large desktop screens
      // },
      colors: {
        colorWhite: 'hsl(var(--clr-white))',
        colorDark: 'hsl(var(--clr-dark))',
        colorAccent: 'hsl(var(--clr-light))',
        deepAccent: 'hsl(var(--clr-light) / .15)',
      },
      backgroundColor: {
        dark: 'hsl(var(--clr-dark))',
        accent: 'hsl(var(--clr-light) / .20)',
      },
      fontSize: {
        'fs-900': ' 9.375rem',
        'fs-800': '6.25rem',
        'fs-700': '3.5rem',
        'fs-600': '2rem',
        'fs-500': '1.75rem',
        'fs-400': '1.125rem',
        'fs-300': '1rem',
        'fs-200': '0.875rem',
      },
    },
    fontFamily: {
      bellefair: ['Bellefair', 'sans-serif'],
      'barlow-cond': ['Barlow Condensed', 'sans-serif'],
      barlow: ['Barlow', ' sans-serif'],
    },
    fontWeight: {
      bold: 700,
      normal: 400,
    },
  },
  plugins: [],
};
