/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	plugins: [require('tailwindcss-animate')],
	theme: {
		extend: {},
	},
};

