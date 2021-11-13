import { Heading, Flex, Divider, Container } from "@chakra-ui/react";

const Title = ({ children, ...props }) => {
	return (
		<Container maxW="container.xl">
			<Flex textAlign="center" alignItems="center" {...props}>
				<Divider borderWidth="1px" opacity="0.5" borderColor="brand" />
				<Heading fontSize={["4xl", null, "5xl"]} mx="4" whiteSpace="nowrap">
					{children}
				</Heading>
				<Divider borderWidth="1px" opacity="0.5" borderColor="brand" />
			</Flex>
		</Container>
	);
};

export default Title;
