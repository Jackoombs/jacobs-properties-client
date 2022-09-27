/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				jacobs: "#004282",
				jacobs2: "#c7dd2b",
				offwhite: "#f8fafc"
			},
			aspectRatio: {
				photo: "3 / 2"
			}
		},
	},
	plugins: [],
}
