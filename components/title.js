import { Heading, Flex, Divider } from "@chakra-ui/react";

const Title = ({ children, ...props }) => {
	return (
		<Flex textAlign="center" alignItems="center" {...props}>
			<Divider borderWidth="1px" opacity="0.5" borderColor="brand" />
			<Heading fontSize={["4xl", null, "4xl"]} mx="4" whiteSpace="nowrap">
				{children}
			</Heading>
			<Divider borderWidth="1px" opacity="0.5" borderColor="brand" />
		</Flex>
	);
};

export default Title;
