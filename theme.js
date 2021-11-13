import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	fonts: {
		heading: "Montserrat, sans-serif",
		body: "Poppins, sans-serif",
	},
	colors: {
		saryy: "#D5A022",
		jashyl: "#044d2c",
		achykJashyl: "#269344",
		kara: "#444D4A",
		boz: "#EFF1ED",
		text: "#444D49",
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
