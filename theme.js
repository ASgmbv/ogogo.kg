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
		heading: "Poppins, sans-serif",
		body: "Inter, sans-serif",
	},
	colors: {
		brand: "#FF7A00",
		darkBrand: "#bd600b",
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
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
