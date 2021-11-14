import Header from "@/components/header";
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
	Grid,
} from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BlogPostsPage = () => {
	return (
		<>
			<Header />
			<Box py={["80px", null, "100px"]}>
				<Container maxW="container.xl">
					<Grid
						templateColumns={["repeat(1, 1fr)", null, "1fr 2fr"]}
						gap="10"
					>
						Header
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default BlogPostsPage;
