import { Container, Box, Flex, Image, Stack, Link } from "@chakra-ui/react";

const Header = () => {
	return (
		<Box py="6" position="absolute" top="0" width="100%">
			<Container maxW="container.xl">
				<Flex alignItems="center">
					<a href="/">
						<Image src="/logo.svg" width="180px" />
					</a>
					<Stack
						color="white"
						direction="row"
						spacing="14"
						display={["none", null, "flex"]}
						flex="1"
						justifyContent="center"
					>
						<Link href="/#mission">Миссия</Link>
						<Link href="/#portfolio">Проекты</Link>
						<Link href="/#team">Команда</Link>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
