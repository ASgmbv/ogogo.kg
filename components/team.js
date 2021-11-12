import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Team = () => {
	const { t } = useTranslation("common");

	return (
		<Box my={["80px", null, "100px"]} id="team">
			<Container maxW="container.xl">
				<Box>
					<VStack
						spacing="4"
						textAlign="center"
						mb={["50px", null, "100px"]}
					>
						<Heading size="xl" letterSpacing="wide">
							{t("team.title")}
						</Heading>
						<Box height="5px" bg="#FF7A00" width="200px"></Box>
					</VStack>
					<Grid
						templateColumns={[
							"1fr",
							null,
							"1fr 1fr ",
							null,
							"1fr 1fr 1fr 1fr",
						]}
						justifyItems="center"
						columnGap="6"
						rowGap={[10, null, 20]}
					>
						<Member
							image="/ahror.png"
							name={t("team.ahror.name")}
							position={t("team.ahror.description")}
						/>
						<Member
							image="/islam.png"
							name={t("team.islam.name")}
							position={t("team.islam.description")}
						/>
						<Member
							image="/nurtilek.png"
							name={t("team.nurtilek.name")}
							position={t("team.nurtilek.description")}
						/>
						<Member
							image="/azamat.png"
							name={t("team.azamat.name")}
							position={t("team.azamat.description")}
						/>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

const Member = ({ image, name, position }) => {
	return (
		<Box
			height={["450px"]}
			backgroundImage={`url(${image})`}
			backgroundPosition="top"
			backgroundSize="cover"
			maxW="450px"
			width="100%"
		>
			<Flex
				boxSize="100%"
				background="linear-gradient(0deg, rgba(255, 122, 0, 0.4) 10%, rgba(255, 255, 255, 0) 50%);"
				flexDirection="column"
				padding="4"
				justifyContent="flex-end"
				textAlign="center"
				alignItems="center"
				color="white"
			>
				<Heading fontSize={["2xl", null, "2xl"]} mb="4">
					{name}
				</Heading>
				<Text as="span" fontWeight="medium">
					{position}
				</Text>
			</Flex>
		</Box>
	);
};

export default Team;
