/** @type {import('tailwindcss').Config} */
import tailwindCssAnimate from 'tailwindcss-animate';

export default {
  content: ['./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  plugins: [tailwindCssAnimate],
  theme: {
    extend: {},
  },
};
