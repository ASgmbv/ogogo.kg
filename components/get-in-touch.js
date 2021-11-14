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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	function onSubmit() {}

	const { t } = useTranslation("common");

	return (
		<Box py={["80px", null, "100px"]}>
			<Container maxW="container.xl">
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "1fr 2fr"]}
					gap="10"
				>
					<Box>
						<Stack spacing="4">
							<Heading
								size="lg"
								position="relative"
								width="fit-content"
								_after={{
									position: "absolute",
									content: "''",
									width: "110%",
									height: "70%",
									top: "0.8rem",
									left: "-0.2rem",
									bg: "#DBF7F2",
									zIndex: -1,
								}}
							>
								{t("get-in-touch.title")}
							</Heading>
							<Box padding="1px" bg="orange.400" width="80%"></Box>
							<Text lineHeight="tall">
								{t("get-in-touch.description")}
							</Text>
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
								label="NAME"
							/>
							<FieldInput
								name={"email"}
								register={register}
								errors={errors}
								label="EMAIL"
							/>
							<FieldTextArea
								name={"text"}
								register={register}
								errors={errors}
								label="TEXT"
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
			<FormLabel
				htmlFor={name}
				fontSize="sm"
				position="relative"
				width="fit-content"
				_after={{
					position: "absolute",
					content: "''",
					width: "110%",
					height: "70%",
					top: "0.5rem",
					left: "-0.2rem",
					bg: "#F7E8F9",
					zIndex: -1,
				}}
			>
				{label}
			</FormLabel>
			<Input
				id={name}
				borderRadius="sm"
				border="2px solid"
				borderColor="brand"
				boxShadow="6px 6px 0px 0px #febc7b"
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
			<FormLabel
				htmlFor={name}
				fontSize="sm"
				position="relative"
				width="fit-content"
				_after={{
					position: "absolute",
					content: "''",
					width: "110%",
					height: "70%",
					top: "0.5rem",
					left: "-0.2rem",
					bg: "#F7E8F9",
					zIndex: -1,
				}}
			>
				{label}
			</FormLabel>
			<Textarea
				id={name}
				borderRadius="sm"
				border="2px solid"
				borderColor="brand"
				boxShadow="6px 6px 0px 0px #febc7b"
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
