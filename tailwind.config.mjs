/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: 'rgb(0,0,0)',
				primary: '#FFCC00',
				secondary: 'rgb(30,30,30)'
			},
			fontFamily: {
				primaryFont: '"Syne", sans- serif"'
			}

		},
	},
	plugins: [

	],
}


