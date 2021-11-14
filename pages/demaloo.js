import {
	Box,
	Container,
	Grid,
	Image,
	Text,
	Heading,
	Stack,
	AspectRatio,
	Flex,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["demaloo", "common"])),
		},
		revalidate: 1,
	};
}

const DemalooPage = () => {
	const { t } = useTranslation("demaloo");

	return (
		<>
			<Head>
				<title>Demaloo</title>
			</Head>
			<Header />
			<Box py={["120px"]}>
				<Flex alignItems="center" justifyContent="center" width="100%">
					<Image
						src="/demaloo-logo.png"
						width={["40px", null, "60px"]}
						mr="4"
					/>
					<Text
						as="span"
						color="gray.700"
						fontFamily="Gilroy"
						fontSize={["3xl", null, "4xl"]}
					>
						{"DEMALOO"}
					</Text>
				</Flex>

				<Container maxW="container.xl">
					<Box my={["80px", null, "100px"]}>
						<Grid templateColumns={["1fr", null, "1fr 1fr"]} gap="6">
							<Image
								src="/demaloo-banner.png"
								height="300px"
								width="100%"
								objectFit="cover"
								objectPosition="top"
							/>
							<Text
								lineHeight="taller"
								alignSelf="center"
								fontSize="lg"
								color="gray.700"
							>
								{t("description")}
							</Text>
						</Grid>
					</Box>
					<Stack spacing={["80px", null, "150px"]}>
						{[
							{
								title: "demaloo-1",
								image: "/demaloo-1.png",
							},
							{
								title: "demaloo-2",
								image: "/demaloo-2.png",
							},
							{
								title: "demaloo-3",
								image: "/demaloo-3.png",
							},
						].map(({ title, image }, idx) => (
							<Feature
								key={title}
								idx={idx}
								title={t(`${title}.title`)}
								description={t(`${title}.description`)}
								image={image}
							/>
						))}
					</Stack>
				</Container>
				<GetInTouch />
			</Box>
			<Footer />
		</>
	);
};

const Feature = ({ idx, description, title, image }) => {
	return (
		<Grid templateColumns={["1fr", null, "1fr 1fr"]} gap={[6, null, 10]}>
			<Stack
				spacing={[4, null, 6]}
				textAlign="start"
				alignItems="start"
				alignSelf="center"
				gridArea={[
					"2 / 1 / 3 / 1",
					null,
					idx % 2 === 0 ? "1 / 1 / 2 / 2" : "1 / 2 / 2 / 3",
				]}
				maxW="500px"
				ml={[0, null, idx % 2 === 0 ? 0 : 20]}
			>
				<Heading size="lg">{title}</Heading>
				<Text lineHeight="30px" fontSize={["sm", null, "md"]}>
					{description}
				</Text>
			</Stack>
			<AspectRatio
				ratio={3 / 2}
				gridArea={[
					"1 / 1 / 2 / 2",
					null,
					idx % 2 === 0 ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2",
				]}
				borderRadius="md"
				overflow="hidden"
			>
				<Image src={image} layout="fill" objectFit="contain" />
			</AspectRatio>
		</Grid>
	);
};

export default DemalooPage;
