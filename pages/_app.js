/* eslint-disable no-undef */
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "keen-slider/keen-slider.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default appWithTranslation(MyApp);
