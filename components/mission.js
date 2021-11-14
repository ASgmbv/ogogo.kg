import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	Stack,
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
									<Box>
										<Image src="/people-icon.png" boxSize="50px" />
									</Box>
								}
								title={t("mission.people.title")}
								description={t("mission.people.description")}
							/>
							<Description
								icon={
									<Box>
										<Image src="/map.png" boxSize="50px" />
									</Box>
								}
								title={t("mission.country.title")}
								description={t("mission.country.description")}
							/>
							<Description
								icon={
									<Box position="relative">
										<Image src="/networking.png" boxSize="50px" />
									</Box>
								}
								title={t("mission.ecosystem.title")}
								description={t("mission.ecosystem.description")}
							/>
						</Grid>
					</Container>
				</Box>
			</Box>
		</>
	);
};

const Description = ({ icon, title, description }) => {
	return (
		<Stack
			spacing="5"
			padding={[0, null, 6]}
			alignItems="start"
			boxShadow="sm"
			border={[0, null, "1px solid rgba(0, 0, 0, 0.1)"]}
			borderRadius={["3xl"]}
		>
			{icon}
			<Heading size="lg" ml="4" fontWeight="normal" position="relative">
				{title}
			</Heading>

			<Text lineHeight="30px">{description}</Text>
		</Stack>
	);
};

export default Mission;
