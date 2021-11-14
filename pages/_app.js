/* eslint-disable no-undef */
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "keen-slider/keen-slider.min.css";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Global
				styles={`
                  @font-face {
                     font-family: 'Gilroy';
                     src: url('/fonts/Gilroy/Gilroy-ExtraBold.otf') format('opentype');
                  }
               `}
			/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default appWithTranslation(MyApp);
