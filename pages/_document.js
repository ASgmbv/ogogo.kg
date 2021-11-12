import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ru">
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Ubuntu:wght@300;400;500;700&display=swap" />
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
