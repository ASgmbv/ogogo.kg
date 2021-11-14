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
	Divider,
	DrawerHeader,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";

import { MdOutlineMenu } from "react-icons/md";

import { useEffect, useState } from "react";

import { useViewportScroll } from "framer-motion";

import {
	RiInstagramLine,
	RiFacebookCircleLine,
	RiTwitterLine,
	RiTelegramLine,
} from "react-icons/ri";

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
						{/* <Image src="/logo-g.svg" width={["35px", null, "40px"]} /> */}
						<Flex alignItems="center" mt="2">
							<Image
								src="/logo-g.svg"
								width={["35px", null, "40px"]}
								mr="4"
							/>
							<Text as="span" color="#FF7A00" fontFamily="Gilroy">
								{"OGOGO GROUP"}
							</Text>
						</Flex>
					</a>
					<Stack
						direction="row"
						spacing="10"
						display={["none", null, "flex"]}
						justifyContent="center"
						alignItems="center"
					>
						<HeaderLink isTransparent={isTop} href="/academy">
							{t("pages.academy")}
						</HeaderLink>

						<HeaderLink isTransparent={isTop} href="/soft">
							{t("pages.soft")}
						</HeaderLink>

						<HeaderLink isTransparent={isTop} href="/demaloo">
							{t("pages.demaloo")}
						</HeaderLink>

						<Button
							as="a"
							href="/#getintouch"
							colorScheme="gray"
							fontWeight="normal"
							borderRadius="full"
							size="sm"
						>
							{t("header.button")}
						</Button>

						<Switcher display={["none", null, "flex"]} isTop={isTop} />
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

					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						size="sm"
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>
								<Flex alignItems="center" mt="2">
									<Image
										src="/logo-g.svg"
										width={["35px", null, "40px"]}
										mr="4"
									/>
									<Text as="span" color="#FF7A00" fontFamily="Gilroy">
										{"OGOGO GROUP"}
									</Text>
								</Flex>
							</DrawerHeader>
							<DrawerBody py="50px">
								<Switcher mb="50px" />

								<Stack
									spacing="6"
									my="50px"
									fontWeight="bold"
									fontSize="3xl"
								>
									<Link href="/academy">{t("pages.academy")}</Link>
									<Link href="/soft">{t("pages.soft")}</Link>
									<Link href="/demaloo">{t("pages.demaloo")}</Link>
								</Stack>

								<Divider />

								<Stack
									direction={["column", null, "row"]}
									spacing="6"
									fontSize="xl"
									my="50px"
								>
									<Flex alignItems="center">
										<Icon as={MdOutlineLocationOn} mr="3" />
										<Text as="span">{t("footer.street")}</Text>
									</Flex>
									<Flex alignItems="center">
										<Icon as={MdOutlineEmail} mr="3" />
										<Text as="span">admin@ogogo.kg</Text>
									</Flex>
									<Flex alignItems="center">
										<Icon as={MdPhone} mr="3" />
										<Text as="span">+996 (550) 312-312</Text>
									</Flex>
								</Stack>

								<Divider />

								<Stack spacing="6" direction="row" my="50px">
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
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Container>
		</Box>
	);
};

const HeaderLink = ({ children, isTransparent, href }) => {
	return (
		<Link href={href} letterSpacing="wide" color={isTransparent && "white"}>
			{children}
		</Link>
	);
};

const Switcher = ({ isTop, ...props }) => {
	const router = useRouter();

	return (
		<Box {...props}>
			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<BiChevronDown />}
					variant="link"
					color={isTop && "white"}
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
