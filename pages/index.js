import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mission from "@/components/mission";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Head from "next/head";
import News from "@/components/news";
import Prismic from "@prismicio/client";
import { Client } from "../lib/prismic";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GetInTouch from "../components/get-in-touch";

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>OGOGO GROUP</title>
			</Head>
			<Header isTransparentAtTop={true} />
			<Banner />
			<Mission />
			<Portfolio />
			<News posts={posts} />
			<Team />
			<GetInTouch />
			<Footer />
		</>
	);
}

export const getStaticProps = async ({ locale }) => {
	const posts = await Client().query(
		Prismic.Predicates.at("document.type", "post"),
		{
			pageSize: 100,
			orderings: "[document.last_publication_date desc]",
		}
	);

	return {
		props: {
			posts: posts.results.map((el) => ({
				slug: el.uid,
				title: el.data.title,
				cover: el.data.cover.url,
				content: el.data.content,
				date: el.data.date,
			})),
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
};
