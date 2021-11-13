import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mission from "@/components/mission";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GetInTouch from "../components/get-in-touch";

export default function Home() {
	return (
		<>
			<Head>
				<title>OGOGO GROUP</title>
			</Head>
			<Header />
			<Banner />
			<Mission />
			<Portfolio />
			<Team />
			<GetInTouch />
			<Footer />
		</>
	);
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
