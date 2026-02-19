/** @type {import('postcss-load-config').Config} */
export default {
	plugins: {
		"@tailwindcss/postcss": {},
		autoprefixer: require("autoprefixer"),
		"postcss-nested": require("postcss-nested"),
	},
};

