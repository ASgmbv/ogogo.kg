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
			500: "#FF7A00",
			700: "rgba(255, 122, 0, 0.8)",
		},
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
				borderRadius: "full",
				fontWeight: "normal",
			},
			sizes: {
				md: {
					fontSize: "sm",
					px: 5,
					h: 8,
				},
				lg: {
					fontSize: "md",
					h: 10,
					px: 7,
				},
			},
			defaultProps: {
				colorScheme: "or",
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
