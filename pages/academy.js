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
	Divider,
	Button,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import {
	FaPython,
	FaReact,
	FaAndroid,
	FaPaw,
	FaHtml5,
	FaJs,
} from "react-icons/fa";

import {
	IoFlameOutline,
	IoFlaskOutline,
	IoHeadsetOutline,
	IoHeartOutline,
} from "react-icons/io5";
import { BsCheck } from "react-icons/bs";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["academy", "common"])),
		},
		revalidate: 1,
	};
}

export default function AcademyPage() {
	const { t } = useTranslation("academy");

	return (
		<>
			<Header />

			<Box py={["120px"]}>
				{/* <Title mb={["50px", null, "100px"]}>OGOGO Academy</Title> */}
				<Image
					src="/logo-academy.png"
					mb={["50px", null, "100px"]}
					width={["200px", null, "250px"]}
					mx="auto"
				/>
				<Container maxW="container.xl">
					<Box my={["80px", null, "100px"]}>
						<Grid templateColumns={["1fr", null, "1fr 1fr"]} gap="6">
							<Image
								src="/news-students.jpeg"
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
							{t("courses")}
						</Heading>
						<Grid
							gap="5"
							templateColumns={["1fr 1fr", null, "1fr 1fr 1fr"]}
						>
							{[
								{
									title: "Python",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaPython,
								},
								{
									title: "React",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaReact,
								},
								{
									title: "UI/UX",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaPaw,
								},
								{
									title: "HTML/CSS",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaHtml5,
								},
								{
									title: "Android",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaAndroid,
								},
								{
									title: "JavaScript",
									description:
										"Make the appearance of a mobile application that has quality and increases user convenience",
									icon: FaJs,
								},
							].map(({ icon, title, description }) => (
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
									<Heading size="md">{title}</Heading>
									<Text>{description}</Text>
								</Stack>
							))}
						</Grid>
					</Box>

					<Box my={["80px", null, "100px"]}>
						<Heading size="lg" textAlign="center" mb="10">
							{t("advantages")}
						</Heading>
						<Grid
							templateColumns={["1fr", null, "repeat(4, 1fr)"]}
							gap="5"
						>
							{[
								{
									icon: IoFlameOutline,
									title: "Опытные ментора",
									description:
										"Вам будут преподовать Senior разработчики с большим багажом за спиной",
									color: "pink",
								},
								{
									icon: IoFlaskOutline,
									title: "Тех. Поддержка 24/7",
									description:
										"На протяжении всего курса мы будем помогать вам усваивать материал ",
									color: "green",
								},
								{
									icon: IoHeadsetOutline,
									title: "Офис в центре города",
									description:
										"Удобное распооложение академии сделает ваше обучение еще более комфортным",
									color: "orange",
								},
								{
									icon: IoHeartOutline,
									title: "Трудоустройство",
									description:
										"По окончании курса мы поможем вам найти работу в топовых IT компаниях  страны",
									color: "purple",
								},
							].map(({ icon, title, description, color }) => (
								<Stack
									key={title}
									spacing="4"
									borderRadius="2xl"
									boxShadow="md"
									padding="4"
									textAlign="center"
									alignItems="center"
								>
									<Circle size="50px" bg={`${color}.100`}>
										<Icon
											as={icon}
											color={`${color}.500`}
											boxSize="30px"
										/>
									</Circle>
									<Heading size="md">{title}</Heading>
									<Text>{description}</Text>
								</Stack>
							))}
						</Grid>
					</Box>

					<Box my={["80px", null, "100px"]}>
						<Heading size="lg" textAlign="center" mb="10">
							{t("pricing")}
						</Heading>
						<Grid
							templateColumns={["1fr", null, "repeat(3, 1fr)"]}
							gap="5"
						>
							{[
								{
									title: "JavaScript",
									price: "8000",
									included: [
										"Опытный ментор",
										"Онлайн доступ к материалам",
										"Тех. поддержка студетов 24/7",
										"Сертификат по окончании",
									],
									color: "#099A97",
								},
								{
									title: "HTML/CSS",
									price: "7000",
									included: [
										"Опытный ментор",
										"Онлайн доступ к материалам",
										"Тех. поддержка студетов 24/7",
										"Сертификат по окончании",
									],
									color: "#FF7A00",
								},
								{
									title: "UI/UX",
									price: "6000",
									included: [
										"Опытный ментор",
										"Онлайн доступ к материалам",
										"Тех. поддержка студетов 24/7",
										"Сертификат по окончании",
									],
									color: "#099A97",
								},
							].map(({ title, price, included, color }) => (
								<Box
									key={title}
									borderRadius="xl"
									overflow="hidden"
									boxShadow="md"
								>
									<Box
										padding="6"
										bg={color}
										textAlign="center"
										color="white"
									>
										<Text as="span" fontSize="2xl">
											{title}
										</Text>
									</Box>

									<Divider />

									<Box
										padding="6"
										bg={color}
										textAlign="center"
										color="white"
									>
										<Text as="span" fontSize="4xl" fontWeight="bold">
											{price}
										</Text>
									</Box>

									<Stack padding="6" paddingY="10" spacing="4">
										{included.map((item) => (
											<Flex key={item} alignItems="center">
												<Icon
													as={BsCheck}
													color={color}
													mr="3"
													boxSize={6}
												/>
												{item}
											</Flex>
										))}
									</Stack>

									<Flex
										justifyContent="center"
										paddingX="6"
										paddingBottom="6"
									>
										<Button
											size="lg"
											colorScheme="or"
											borderRadius="full"
											fontSize="md"
											mx="auto"
											bg={color}
										>
											Записаться
										</Button>
									</Flex>
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
