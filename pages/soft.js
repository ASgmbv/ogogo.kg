import {
	Box,
	Container,
	Grid,
	Image,
	Text,
	Heading,
	Stack,
	Circle,
	Icon,
	Flex,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import {
	FaPython,
	FaReact,
	FaAndroid,
	FaPaw,
	FaHtml5,
	FaJs,
} from "react-icons/fa";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["soft", "common"])),
		},
		revalidate: 1,
	};
}

export default function SoftPage() {
	const { t } = useTranslation(["soft", "common"]);

	return (
		<>
			<Head>
				<title>OGOGO Soft</title>
			</Head>
			<Header />

			<Box py={["120px"]}>
				<Flex alignItems="center" justifyContent="center" width="100%">
					<Image src="/logo-g.svg" width={["40px", null, "60px"]} mr="4" />
					<Text
						as="span"
						color="#FF7A00"
						fontFamily="Gilroy"
						fontSize={["3xl", null, "4xl"]}
					>
						{"OGOGO SOFT"}
					</Text>
				</Flex>
				<Container maxW="container.xl">
					<Box my={["80px", null, "100px"]}>
						<Grid templateColumns={["1fr", null, "1fr 1fr"]} gap="6">
							<Image
								src="/ogogo-soft.jpeg"
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
					<Box my={["80px", null, "100px"]}>
						<Heading size="lg" textAlign="center" mb="10">
							{t("development")}
						</Heading>
						<Grid
							gap="5"
							templateColumns={["1fr ", null, "1fr 1fr", "1fr 1fr 1fr"]}
						>
							{[
								{
									title: "software-development",
									icon: FaPython,
								},
								{
									title: "mobile-application-development",
									icon: FaReact,
								},
								{
									title: "subcontracting-software-development",
									icon: FaPaw,
								},
								{
									title: "business-software-solutions",
									icon: FaHtml5,
								},
								{
									title: "it-consultation",
									icon: FaAndroid,
								},
								{
									title: "software-integration",
									icon: FaJs,
								},
							].map(({ icon, title }) => (
								<Stack
									key={title}
									spacing="4"
									borderRadius="2xl"
									boxShadow="md"
									padding="4"
								>
									<Circle size="50px" bg="or.500">
										<Icon as={icon} color="white" boxSize="30px" />
									</Circle>
									<Heading size="md">{t(`${title}.title`)}</Heading>
									<Text color="gray.600">
										{t(`${title}.description`)}
									</Text>
								</Stack>
							))}
						</Grid>
					</Box>

					<Box my={["80px", null, "100px"]}>
						<Heading size="lg" textAlign="center" mb="10">
							{t("projects")}
						</Heading>
						<Grid
							templateColumns={["1fr", null, "repeat(3, 1fr)"]}
							gap="5"
						>
							{[
								{
									image: "/demaloo-banner.png",
									title: "DEMALOO",
								},
								{
									image: "/taxi-banner.png",
									title: "OGOGO TAXI",
								},
								{
									image: "/parkovka.jpg",
									title: "BISHKEK PARKING",
								},
							].map(({ title, image }) => (
								<Stack key={title} spacing="4">
									<Image
										src={image}
										height="250px"
										objectFit="cover"
									/>
									<Text as="span" fontSize="lg" fontWeight="semibold">
										{title}
									</Text>
								</Stack>
							))}
						</Grid>
					</Box>

					<Box my={["80px", null, "100px"]}>
						<Heading size="lg" textAlign="center" mb="10">
							{t("numbers")}
						</Heading>
						<Grid
							templateColumns={["1fr 1fr", null, "repeat(4, 1fr)"]}
							gap={[4, null, 10]}
						>
							{[
								{
									bigText: "+3",
									smallText: "experience",
								},
								{
									bigText: "+15",
									smallText: "happy-customers",
								},
								{
									bigText: "+23",
									smallText: "finished-projects",
								},
								{
									bigText: "+30",
									smallText: "employees",
								},
							].map(({ bigText, smallText }) => (
								<Box
									key={bigText + smallText}
									padding="4"
									paddingY="6"
									boxShadow="md"
									borderRadius="xl"
									textAlign="center"
								>
									<Heading color="#666666" mb="4">
										{bigText}
									</Heading>
									<Text>{t(smallText)}</Text>
								</Box>
							))}
						</Grid>
					</Box>
				</Container>
				<GetInTouch />
			</Box>

			<Footer />
		</>
	);
}
