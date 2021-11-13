import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	Flex,
	Stack,
	Icon,
	Center,
	Divider,
	// Image,
} from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import { GiSunflower } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Mission = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Box my={["80px", null, "100px"]} as="section" id="mission">
				<Container maxW="container.xl">
					<Box>
						<Flex
							mb={["50px", null, "100px"]}
							textAlign="center"
							alignItems="center"
						>
							<Divider
								borderWidth="1px"
								opacity="0.5"
								borderColor="brand"
							/>
							<Heading
								fontSize={["3xl", null, "40px"]}
								letterSpacing="wide"
								mx="4"
							>
								{t("mission.title")}
							</Heading>
							<Divider
								borderWidth="1px"
								opacity="0.5"
								borderColor="brand"
							/>
						</Flex>
						<Grid templateColumns={["1fr", null, "1fr 1fr 1fr"]} gap="4">
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="teal.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={BsPeople} boxSize="30px" />
									</Center>
									// <Image src="/people.png" boxSize="80px" />
								}
								title={t("mission.people.title")}
								description={t("mission.people.description")}
							/>
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="red.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={GiSunflower} boxSize="30px" />
									</Center>
									// <Image src="/country.png" boxSize="80px" />
								}
								title={t("mission.country.title")}
								description={t("mission.country.description")}
							/>
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="orange.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={FiCheckCircle} boxSize="30px" />
									</Center>
									// <Image src="/eco.png" boxSize="80px" />
								}
								title={t("mission.ecosystem.title")}
								description={t("mission.ecosystem.description")}
							/>
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
};

const Description = ({ icon, title, description }) => {
	return (
		<Stack
			spacing="6"
			padding={[4, null, 6]}
			borderRadius="xl"
			border="1px solid rgba(0, 0, 0, 0.1)"
			alignItems="start"
		>
			{icon}
			<Heading
				size="lg"
				// textShadow="3px -3px #FF7A00"
			>
				{title}
			</Heading>
			<Text lineHeight="taller">{description}</Text>
		</Stack>
	);
};

export default Mission;
