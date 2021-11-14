import { Heading, Box, Flex } from "@chakra-ui/react";

const Title = ({ children, ...props }) => {
	return (
		<Flex
			flexDirection="column"
			textAlign="center"
			alignItems="center"
			width="fit-content"
			mx="auto"
			{...props}
		>
			<Heading fontSize={["4xl", null, "4xl"]} mb="4">
				{children}
			</Heading>

			<Box height="3px" bg="or.500" width="80%"></Box>
		</Flex>
	);
};

export default Title;
