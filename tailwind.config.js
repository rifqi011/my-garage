/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#111",
				white: "#fff",
			},
			fontFamily: {
				OpenSans: ["Open Sans", "sans-serif"],
				Cormorant: ["Cormorant", "serif"],
			},
			animation: {
				blink: "blink .15s step-end infinite",
				fadeInDown: "fadeInDown 1s ease-out forwards",
			},
			keyframes: {
				blink: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
				fadeInDown: {
					"0%": { opacity: "0", transform: "translateY(-100%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
}
