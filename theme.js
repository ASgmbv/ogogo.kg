import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				color: "#111213",
			},
			".blog-content": {
				p: {
					fontSize: "17px",
					lineHeight: "tall",
					mb: "8",
				},
				h1: {
					mt: "6",
					mb: "8",
					lineHeight: 1,
					fontWeight: "bold",
					fontSize: "5xl",
				},
				h2: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "4xl",
				},
				h3: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "1.875rem",
				},
				h4: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "1.25rem",
				},
				ol: {
					mt: "1.5rem",
					ml: "1.25rem",
					"blockquote &": { mt: 0 },
					"& > * + *": {
						mt: "0.25rem",
					},
					fontSize: "lg",
				},
				a: {
					textDecoration: "underline",
					color: "blue.600",
				},
			},
		}),
	},
	fonts: {
		heading: "Ubuntu, sans-serif",
		body: "Ubuntu, sans-serif",
	},
	colors: {
		brand: "#FF7A00",
		darkBrand: "rgba(255, 122, 0, 0.8)",
		or: {
			400: "#FF7A00",
			500: "#FF7A00",
			600: "rgba(255, 122, 0, 0.8)",
			700: "rgba(255, 122, 0, 0.8)",
		},
		ak: {
			400: "#fff",
			500: "#fff",
			600: "#fff",
			700: "#fff",
		},
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
				borderRadius: "md",
			},
		},
		Link: {
			baseStyle: {
				_hover: {
					textDecoration: "none",
				},
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
});

export default theme;
