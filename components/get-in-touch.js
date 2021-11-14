import {
	Box,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Textarea,
	Grid,
	Container,
	Heading,
	Text,
	Stack,
	Flex,
	Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { MdOutlineLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";

const GetInTouch = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	function onSubmit() {}

	const { t } = useTranslation("common");

	return (
		<Box py={["80px", null, "100px"]} id="getintouch">
			<Container maxW="container.xl">
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "1fr 2fr"]}
					gap="10"
				>
					<Box>
						<Stack spacing="4">
							<Heading size="lg">{t("get-in-touch.title")}</Heading>
							<Box padding="1px" bg="orange.400" width="80%"></Box>
							<Text lineHeight="tall">
								{t("get-in-touch.description")}
							</Text>
							<Stack spacing="6">
								<Flex alignItems="center">
									<Icon as={MdPhone} mr="3" />
									<Text as="span" fontSize="sm">
										+996 (550) 312-312
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdOutlineEmail} mr="3" />
									<Text as="span" fontSize="sm">
										admin@ogogo.kg
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdOutlineLocationOn} mr="3" />
									<Text as="span" fontSize="sm">
										{t("footer.street")}
									</Text>
								</Flex>
							</Stack>
						</Stack>
					</Box>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid
							templateColumns={["1fr", null, "repeat(2, 1fr)"]}
							columnGap={[4, null, 6]}
							rowGap={[6, null, 8]}
						>
							<FieldInput
								name={"firstName"}
								register={register}
								errors={errors}
								label={t("get-in-touch.name")}
							/>
							<FieldInput
								name={"email"}
								register={register}
								errors={errors}
								label="Email"
							/>
							<FieldTextArea
								name={"text"}
								register={register}
								errors={errors}
								label={t("get-in-touch.text")}
							/>
						</Grid>
						<Button
							mt={8}
							size="lg"
							colorScheme="or"
							borderRadius="full"
							fontSize="md"
						>
							Submit
						</Button>
					</form>
				</Grid>
			</Container>
		</Box>
	);
};

const FieldInput = ({ register, errors, name, label, ...props }) => {
	return (
		<FormControl isInvalid={errors[name]}>
			<FormLabel htmlFor={name} fontSize="sm">
				{label}
			</FormLabel>
			<Input
				id={name}
				borderRadius="sm"
				border="2px solid"
				borderColor="brand"
				_hover={{
					borderColor: "black",
				}}
				{...register(name, {
					required: "This is required",
				})}
				{...props}
			/>
			<FormErrorMessage>
				{errors[name] && errors[name].message}
			</FormErrorMessage>
		</FormControl>
	);
};

const FieldTextArea = ({ register, errors, name, label, ...props }) => {
	return (
		<FormControl
			isInvalid={errors[name]}
			gridColumnStart="1"
			gridColumnEnd={[2, null, 3]}
			{...props}
		>
			<FormLabel htmlFor={name} fontSize="sm">
				{label}
			</FormLabel>
			<Textarea
				id={name}
				borderRadius="sm"
				border="2px solid"
				borderColor="brand"
				resize="none"
				_hover={{
					borderColor: "black",
				}}
				_active={{
					boxShadow: "none",
				}}
				{...register(name, {
					required: "This is required",
				})}
			/>
			<FormErrorMessage>
				{errors[name] && errors[name].message}
			</FormErrorMessage>
		</FormControl>
	);
};

export default GetInTouch;
