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

import { useEffect, useState } from "react";

import { useViewportScroll } from "framer-motion";

const Header = ({ isTransparentAtTop = false }) => {
	const { t } = useTranslation("common");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [y, setY] = useState(0);

	const { scrollY } = useViewportScroll();

	useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);

	const isTop = y <= 0 && isTransparentAtTop;

	return (
		<Box
			py="4"
			top="0"
			width="100%"
			zIndex="2"
			position={isTop ? "absolute" : "fixed"}
			bg={isTop ? "transparent" : "white"}
			shadow={
				!isTop &&
				"0 -1px 0 #fff, 0 3px 6px 0 rgb(0 0 0 / 5%), 0 0.5px 0 0 rgb(0 0 0 / 10%);"
			}
			transition="background-color 0.3s"
		>
			<Container maxW="container.xl">
				<Flex alignItems="center" justifyContent="space-between">
					<a href="/">
						<Image src="/logo-g.svg" width={["35px", null, "40px"]} />
					</a>
					<Stack
						direction="row"
						spacing="10"
						display={["none", null, "flex"]}
						justifyContent="center"
						alignItems="center"
					>
						<HeaderLink isTransparent={isTop}>
							{t("pages.missions")}
						</HeaderLink>

						<HeaderLink isTransparent={isTop}>
							{t("pages.projects")}
						</HeaderLink>

						<HeaderLink isTransparent={isTop}>
							{t("pages.team")}
						</HeaderLink>

						<Button
							colorScheme="gray"
							fontWeight="normal"
							borderRadius="full"
							size="sm"
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
						color={isTop && "white"}
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

const HeaderLink = ({ children, isTransparent }) => {
	return (
		<Link
			href="/#portfolio"
			letterSpacing="wide"
			color={isTransparent && "white"}
		>
			{children}
		</Link>
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
					{router.locale === "en" ? "EN" : "RU"}
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
