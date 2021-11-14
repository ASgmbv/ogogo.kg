import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	Button,
	Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Banner = () => {
	const { t } = useTranslation("common");

	return (
		<Box
			height={["600px", null, "650px"]}
			backgroundImage={`url(/main-banner.png)`}
			backgroundPosition="center"
			backgroundSize="cover"
			width="100%"
		>
			<Flex boxSize="100%" background="rgba(0, 0, 0, 0.3)">
				<Container maxW="container.xl" height="100%">
					<Stack
						justifyContent="center"
						alignItems={["center", null, "start"]}
						height="100%"
						spacing="10"
					>
						<Heading
							color="white"
							mb="4"
							maxW="650px"
							lineHeight="tall"
							size="lg"
							textAlign={["center", null, "start"]}
						>
							<Text as="span" color="#FF7A00" fontFamily="Gilroy">
								{"OGOGO GROUP - "}
							</Text>
							{t("banner.title")}
						</Heading>

						<Button
							size="lg"
							colorScheme="or"
							borderRadius="full"
							fontSize="md"
						>
							{t("banner.button")}
						</Button>
					</Stack>
				</Container>
			</Flex>
		</Box>
	);
};

export default Banner;
