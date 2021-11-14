import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Container,
	Image,
	Link,
	Divider,
	Grid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
	RiInstagramLine,
	RiFacebookCircleLine,
	RiTwitterLine,
	RiTelegramLine,
} from "react-icons/ri";
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<Box bg="#2E2E2E">
			<Container maxW="container.xl">
				<Grid
					templateColumns={["1fr", null, "auto 1fr"]}
					py={["50px", null, "80px"]}
					color="white"
					gap="10"
				>
					<Image src="/logo-g.svg" width="40px" alignSelf="center" />
					<Stack divider={<Divider />} spacing="6">
						<Flex flexDirection="column" flex="1">
							<Flex
								flexDirection={["column", null, "row"]}
								justifyContent="space-between"
								alignItems={["start", null, "center"]}
							>
								<Stack
									spacing={[4, null, 10]}
									direction={["column", null, "row"]}
									mb={[10, null, 0]}
								>
									<Link href="/#mission">{t("pages.missions")}</Link>
									<Link href="/#portfolio">{t("pages.projects")}</Link>
									<Link href="/#team">{t("pages.team")}</Link>
									<Link>Contacts</Link>
								</Stack>
								<Stack spacing="6" direction="row">
									<Link
										href="https://www.instagram.com/ogogo_academy"
										isExternal
									>
										<Icon as={RiInstagramLine} boxSize="25px" />
									</Link>
									<Icon as={RiFacebookCircleLine} boxSize="25px" />
									<Icon as={RiTelegramLine} boxSize="25px" />
									<Icon as={RiTwitterLine} boxSize="25px" />
								</Stack>
							</Flex>
						</Flex>
						<Flex
							flexDirection={["column-reverse", null, null, "row"]}
							justifyContent="space-between"
						>
							<Text as="span" fontSize="sm" mt={[6, null, null, 0]}>
								© 2021{` ${t("footer.rights")}`}
							</Text>
							<Stack direction={["column", null, "row"]} spacing="6">
								<Flex alignItems="center">
									<Icon as={MdOutlineLocationOn} mr="3" />
									<Text as="span" fontSize="sm">
										г. Бишкек, ул. Ибраимова 115/1
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdOutlineEmail} mr="3" />
									<Text as="span" fontSize="sm">
										ogogoacademy@gmail.com
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdPhone} mr="3" />
									<Text as="span" fontSize="sm">
										+996 (550) 312-312
									</Text>
								</Flex>
							</Stack>
						</Flex>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
