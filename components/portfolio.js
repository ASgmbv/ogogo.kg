import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	Image,
	Button,
	Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import Title from "./title";

const Portfolio = () => {
	const { t } = useTranslation("common");

	return (
		<Box my={["80px", null, "100px"]} id="portfolio">
			<Container maxW="container.xl">
				<Box>
					<Stack spacing={["80px", null, "150px"]}>
						<Title>{t("projects.title")}</Title>

						<Project
							idx={0}
							description={t("projects.taxi.description")}
							title={
								<Flex alignItems="center">
									<Image
										src="/ogogo-logo.png"
										width={["25px", null, "50px"]}
										mr="3"
									/>
									<Heading size="lg">OGOGO Taxi</Heading>
								</Flex>
							}
							image="/taxi-banner.png"
						/>
						<Project
							idx={1}
							description={t("projects.academy.description")}
							title={
								<Flex alignItems="center">
									<Image
										src="/academy-logo.png"
										width={["25px", null, "50px"]}
										mr="3"
									/>
									<Heading size="lg">OGOGO Academy</Heading>
								</Flex>
							}
							image="/academy-banner.png"
						/>
						<Project
							idx={2}
							description={t("projects.development.description")}
							title={
								<Flex alignItems="center">
									<Image
										src="/ogogo-logo.png"
										width={["25px", null, "50px"]}
										mr="3"
									/>
									<Heading size="lg">OGOGO Development</Heading>
								</Flex>
							}
							image="/ogogo-group-banner.png"
						/>
						<Project
							idx={3}
							description={t("projects.demaloo.description")}
							title={
								<Flex alignItems="center">
									<Image
										src="/demaloo-logo.png"
										width={["20px", null, "40px"]}
										mr="5"
									/>
									<Heading size="lg">Demaloo</Heading>
								</Flex>
							}
							image="/demaloo-banner.png"
						/>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

const Project = ({ idx, description, title, image }) => {
	const { t } = useTranslation("common");

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
				{title}
				<Text lineHeight="30px" fontSize={["sm", null, "md"]}>
					{description}
				</Text>
				<Button
					variant="link"
					colorScheme="orange"
					color="#FF7A00"
					rightIcon={<Icon as={BsArrowRight} />}
				>
					{t("projects.project-button")}
				</Button>
			</Stack>
			<AspectRatio
				ratio={3 / 2}
				gridArea={[
					"1 / 1 / 2 / 2",
					null,
					idx % 2 === 0 ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2",
				]}
				boxShadow={[
					"6px 6px 0px 0px #febc7b",
					null,
					idx % 2 === 0
						? "-6px 6px 0px 0px #febc7b"
						: "6px 6px 0px 0px #febc7b",
				]}
				borderRadius="md"
				overflow="hidden"
			>
				<Image src={image} layout="fill" objectFit="contain" />
			</AspectRatio>
		</Grid>
	);
};

export default Portfolio;
