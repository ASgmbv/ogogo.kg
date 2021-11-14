import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				color: "#111213",
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
