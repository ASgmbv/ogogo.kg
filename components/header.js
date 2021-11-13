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
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	useDisclosure,
	IconButton,
	Icon,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";

import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
	const { t } = useTranslation("common");

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box py="6" position="absolute" top="0" width="100%">
			<Container maxW="container.xl">
				<Flex alignItems="center" justifyContent="space-between">
					<a href="/">
						<Image src="/logo.svg" width="180px" mt="5px" />
					</a>
					<Stack
						direction="row"
						spacing="10"
						display={["none", null, "flex"]}
						justifyContent="center"
						alignItems="center"
					>
						<Link href="/#mission" letterSpacing="wider" color="white">
							{t("pages.missions")}
						</Link>

						<Link href="/#portfolio" letterSpacing="wider" color="white">
							{t("pages.projects")}
						</Link>

						<Link href="/#team" letterSpacing="wider" color="white">
							{t("pages.team")}
						</Link>

						<Button
							borderRadius="full"
							size="sm"
							px="5"
							bg="white"
							_hover={{
								bg: "brand",
								color: "white",
							}}
							_active={{
								bg: "darkBrand",
								color: "white",
							}}
						>
							{t("header.button")}
						</Button>

						<Switcher display={["none", null, "flex"]} color="white" />
					</Stack>

					{/* mobile */}

					<IconButton
						icon={<Icon as={MdOutlineMenu} boxSize="30px" />}
						variant="unstyled"
						onClick={onOpen}
						display={["block", null, "none"]}
						color="white"
						size="lg"
					/>

					<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerBody py="100px">
								<Switcher mb="50px" />

								<Stack spacing="8" my="50px">
									<Link href="/#mission">{t("pages.missions")}</Link>
									<Link href="/#portfolio">{t("pages.projects")}</Link>
									<Link href="/#team">{t("pages.team")}</Link>
								</Stack>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Container>
		</Box>
	);
};

const Switcher = ({ color, ...props }) => {
	const router = useRouter();

	return (
		<Box {...props}>
			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<BiChevronDown />}
					variant="link"
					color={color}
				>
					{router.locale === "en" ? (
						<Image width="30px" src="/british-flag.png" />
					) : (
						<Image width="30px" src="/russian-flag.png" />
					)}
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
		</Box>
	);
};

export default Header;
