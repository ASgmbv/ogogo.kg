import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Container,
	Image,
	Circle,
	Link,
} from "@chakra-ui/react";
import {
	FaInstagram,
	FaFacebook,
	FaTelegramPlane,
	FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
	return (
		<Box bg="#EBF3FF">
			<Container maxW="container.xl">
				<Flex py="50px" justifyContent="space-between" alignItems="start">
					<Image src="/logo-orange.svg" />
					<Stack spacing="4" display={["none", null, "flex"]}>
						<Link href="/#mission">Миссия</Link>
						<Link href="/#portfolio">Проекты</Link>
						<Link href="/#team">Команда</Link>
					</Stack>
					<Stack spacing="4">
						<Circle size="40px" bg="white" color="gray.600">
							<Icon as={FaInstagram} boxSize="20px" />
						</Circle>
						<Circle size="40px" bg="white" color="gray.600">
							<Icon as={FaFacebook} boxSize="20px" />
						</Circle>
						<Circle size="40px" bg="white" color="gray.600">
							<Icon as={FaTelegramPlane} boxSize="20px" />
						</Circle>
						<Circle size="40px" bg="white" color="gray.600">
							<Icon as={FaTwitter} boxSize="20px" />
						</Circle>
					</Stack>
				</Flex>
				<Flex
					alignItems={["start", null, "center"]}
					justifyContent="space-between"
					py="3"
					color="#707070"
					flexDirection={["column-reverse", null, "row"]}
				>
					<Text as="span" fontSize="sm" mt={[6, null, 0]}>
						© 2021 All Rights Reserved
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
			</Container>
		</Box>
	);
};

export default Footer;
