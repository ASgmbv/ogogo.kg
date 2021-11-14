import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	Stack,
	Flex,
	Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "./title";

const Mission = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Box my={["80px", null, "100px"]} as="section" id="mission">
				<Box>
					<Container maxW="container.xl">
						<Title mb={["50px", null, "100px"]}>
							{t("mission.title")}
						</Title>
					</Container>

					<Container maxW="container.xl">
						<Grid
							templateColumns={["1fr", null, "1fr 1fr 1fr"]}
							gap={[10]}
						>
							<Description
								icon={
									<Box position="relative">
										<Image src="/eco.png" boxSize="30px" />
									</Box>
								}
								title={t("mission.ecosystem.title")}
								description={t("mission.ecosystem.description")}
								textColor="#F7E8F9"
							/>
							<Description
								icon={
									<Box>
										<Image src="/people.png" boxSize="30px" />
									</Box>
								}
								title={t("mission.people.title")}
								description={t("mission.people.description")}
								textColor="#DBF7F2"
							/>
							<Description
								icon={
									<Box>
										<Image src="/country.png" boxSize="30px" />
									</Box>
								}
								title={t("mission.country.title")}
								description={t("mission.country.description")}
								textColor="#FFEDDC"
							/>
						</Grid>
					</Container>
				</Box>
			</Box>
		</>
	);
};

const Description = ({ icon, title, description, textColor }) => {
	return (
		<Stack
			spacing="5"
			padding={[0, null, 6]}
			borderRadius="xl"
			alignItems="start"
		>
			<Flex alignItems="center">
				{icon}
				<Heading
					size="lg"
					ml="4"
					fontWeight="normal"
					position="relative"
					_after={{
						position: "absolute",
						content: "''",
						width: "110%",
						height: "75%",
						top: "0.8rem",
						left: "-0.2rem",
						bg: textColor,
						zIndex: -1,
					}}
				>
					{title}
				</Heading>
			</Flex>

			<Text lineHeight="30px">{description}</Text>
		</Stack>
	);
};

export default Mission;
