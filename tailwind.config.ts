import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			magenta: "#B55C97",
			"light-magenta": "#E498CB",
			"muted-light-magenta": "#F5ECF1",
			"pink-grey": "#CBB8CB",
			"pinky-white": "#FFFCFE",
			"dark-maroon": "#624C62",
			green: "#87FF85",
			coral: "#FF6A6A",
			"light-pink": "#F4D7EA",
			"toolkit-start-pink": "#FFEFF9",
			"toolkit-middle-pink": "#F5BAF6",
			"toolkit-end-pink": "#F4D7EA",
			black: "black",
			yellow: "#FDFF85",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
