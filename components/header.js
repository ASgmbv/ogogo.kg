import {
	Container,
	Box,
	Flex,
	Image,
	Stack,
	Link,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";

const Header = () => {
	const { t } = useTranslation("common");
	const router = useRouter();

	return (
		<Box py="6" position="absolute" top="0" width="100%">
			<Container maxW="container.xl">
				<Flex alignItems="center" justifyContent="space-between">
					<a href="/">
						<Image src="/logo.svg" width="180px" />
					</a>
					<Stack
						direction="row"
						spacing="14"
						display={["none", null, "flex"]}
						flex="1"
						justifyContent="center"
						color="white"
					>
						<Link href="/#mission">{t("pages.missions")}</Link>
						<Link href="/#portfolio">{t("pages.projects")}</Link>
						<Link href="/#team">{t("pages.team")}</Link>
					</Stack>
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<BiChevronDown />}
							variant="link"
							color="white"
						>
							{router.locale === "en" ? "English" : "Русский"}
						</MenuButton>
						<MenuList>
							<MenuItem
								onClick={() => {
									router.push("/", null, {
										locale: "ru",
									});
								}}
							>
								<Image width="30px" src="/russian-flag.png" mr="6" />
								<Text
									as="span"
									fontSize="sm"
									fontWeight="semibold"
									color="blue.700"
								>
									Русский
								</Text>
							</MenuItem>
							<MenuItem
								onClick={() => {
									router.push("/", null, {
										locale: "en",
									});
								}}
							>
								<Image width="30px" src="/british-flag.png" mr="6" />
								<Text
									as="span"
									fontSize="sm"
									fontWeight="semibold"
									color="blue.700"
								>
									English
								</Text>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
