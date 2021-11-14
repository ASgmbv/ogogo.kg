import {
	Box,
	Container,
	Image,
	Link,
	Grid,
	Heading,
	Stack,
	Text,
	Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "./title";

import { FaInstagram, FaFacebook } from "react-icons/fa";

const Team = () => {
	const { t } = useTranslation("common");

	return (
		<Box my={["80px", null, "100px"]} id="team">
			<Container maxW="container.xl">
				<Title mb={["50px", null, "100px"]}>{t("team.title")}</Title>
			</Container>
			<Container maxW="container.lg">
				<Box>
					<Grid
						templateColumns={["1fr 1fr ", null, "1fr 1fr 1fr 1fr"]}
						justifyItems="center"
						columnGap="4"
						rowGap="8"
					>
						<Member
							image="/ahror.png"
							name={t("team.ahror.name")}
							position={t("team.ahror.description")}
							facebook="https://www.facebook.com/ahror.iminov"
							instagram="https://www.instagram.com/ahror_iminov_official/"
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

const Member = ({ image, name, position, facebook, instagram }) => {
	return (
		<Stack width="100%">
			<Image
				src={image}
				height={["200px", null, "300px"]}
				objectFit="cover"
				objectPosition="top"
			/>

			<Heading fontSize={["sm", null, "lg"]}>{name}</Heading>
			<Text as="span" fontSize={["xs", null, "md"]} color="gray.600">
				{position}
			</Text>
			<Stack direction="row">
				{facebook && (
					<Link href={facebook} isExternal>
						<Icon as={FaFacebook} boxSize="25px" />
					</Link>
				)}
				{instagram && (
					<Link href={instagram} isExternal>
						<Icon as={FaInstagram} boxSize="25px" />
					</Link>
				)}
			</Stack>
		</Stack>
	);
};

export default Team;
