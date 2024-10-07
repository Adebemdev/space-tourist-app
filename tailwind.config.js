/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px', // Small phones
        tablet: '768px', // Tablets and small laptops
        laptop: '1024px', // Medium laptops and large tablets
        desktop: '1440px', // Desktops
        largeDesktop: '1920px', // Large desktop screens
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
