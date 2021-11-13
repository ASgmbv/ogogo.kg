import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "./title";

const Team = () => {
	const { t } = useTranslation("common");

	return (
		<Box my={["80px", null, "100px"]} id="team">
			<Title mb={["50px", null, "100px"]}>{t("team.title")}</Title>
			<Container maxW="container.lg">
				<Box>
					<Grid
						templateColumns={["1fr 1fr ", null, "1fr 1fr 1fr 1fr"]}
						justifyItems="center"
						gap={[4]}
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
		<>
			<Box
				height={["200px", null, "300px"]}
				backgroundImage={`url(${image})`}
				backgroundPosition="top"
				backgroundSize="cover"
				maxW="450px"
				width="100%"
				boxShadow={[
					"6px 6px 0px 0px #febc7b",
					null,
					"8px 8px 0px 0px #febc7b",
				]}
			>
				<Flex
					boxSize="100%"
					flexDirection="column"
					padding={[2, null, 4]}
					justifyContent="flex-end"
					textAlign="start"
					alignItems="start"
				>
					<Heading
						fontSize={["sm", null, "md"]}
						bg="white"
						padding={[1, null, 2]}
					>
						{name}
					</Heading>
					<Text
						as="span"
						bg="white"
						fontSize={["xs", null, "sm"]}
						px={[1, null, 2]}
						pb={[1, null, 2]}
					>
						{position}
					</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Team;
