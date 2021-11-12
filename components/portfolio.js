import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	VStack,
	Image,
	Button,
	Icon,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const Portfolio = () => {
	return (
		<Box my={["80px", null, "100px"]} id="portfolio">
			<Container maxW="container.xl">
				<Box>
					<Stack spacing={["80px", null, "150px"]}>
						<VStack spacing="4" textAlign="center">
							<Heading size="xl" letterSpacing="wide">
								Наши Проекты
							</Heading>
							<Box height="5px" bg="#FF7A00" width="200px"></Box>
						</VStack>
						<Project
							idx={0}
							description={`Онлайн сервис для поиска, вызова и оплаты услуг такси которые могут использовать частные водители Кыргызстана ! С помощью приложения Ogogo taxi пассажир резервирует машину с водителем и отслеживает её перемещение к указанной точке в онлайн режиме.`}
							title={
								<Flex alignItems="center">
									<Image src="/academy-logo.png" width="50px" mr="3" />
									<Heading size="lg">OGOGO Taxi</Heading>
								</Flex>
							}
							image="/taxi-banner.png"
						/>
						<Project
							idx={1}
							description={`Образовательное учреждение в котором люди любого возраста за короткие сроки могут получить качественное образование в сфереIT. Основная концепция OGOGO академии это дарить знания вместе с эмоциями, развивая не только технические навыки, но и личные качества наших... `}
							title={
								<Flex alignItems="center">
									<Image src="/academy-logo.png" width="50px" mr="3" />
									<Heading size="lg">OGOGO Academy</Heading>
								</Flex>
							}
							image="/academy-banner.png"
						/>
						<Project
							idx={2}
							description={`Компания занимается внедрением информационных технологий в различные сферы предприятий, как для частных потребителей так и крупных предприятий.`}
							title={
								<Flex alignItems="center">
									<Image src="/ogogo-logo.png" width="50px" mr="3" />
									<Heading size="lg">OGOGO Development</Heading>
								</Flex>
							}
							image="/ogogo-group-banner.png"
						/>
						<Project
							idx={3}
							description={`Маркетплейс туристических услуг, мы даем доступ туристам к безопасному, уникальному и доступному отдыху по всей Центральной Азии. Demaloo там где начинаются впечатления. `}
							title={
								<Flex alignItems="center">
									<Image src="/demaloo-logo.png" width="40px" mr="5" />
									<Heading size="lg">Demaloo</Heading>
								</Flex>
							}
							image="/demaloo-banner.png"
						/>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

const Project = ({ idx, description, title, image }) => {
	return (
		<Grid templateColumns={["1fr", null, "1fr 1fr"]} gap={[10]}>
			<Stack
				spacing="6"
				textAlign="start"
				alignItems="start"
				alignSelf="center"
				gridArea={[
					"2 / 1 / 3 / 1",
					null,
					idx % 2 === 0 ? "1 / 1 / 2 / 2" : "1 / 2 / 2 / 3",
				]}
				maxW="500px"
				ml={[0, null, idx % 2 === 0 ? 0 : 20]}
			>
				{title}
				<Text lineHeight="28px">{description}</Text>
				<Button
					variant="link"
					colorScheme="orange"
					color="#FF7A00"
					rightIcon={<Icon as={BsArrowRight} />}
				>
					Подробнее
				</Button>
			</Stack>
			<AspectRatio
				ratio={3 / 2}
				gridArea={[
					"1 / 1 / 2 / 2",
					null,
					idx % 2 === 0 ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2",
				]}
				boxShadow={[
					0,
					null,
					idx % 2 === 0
						? "-20px 20px 0px 0px #febc7b"
						: "20px 20px 0px 0px #febc7b",
				]}
				borderRadius="2xl"
				overflow="hidden"
				// maxW="450px"
			>
				<Image src={image} layout="fill" objectFit="contain" />
			</AspectRatio>
		</Grid>
	);
};

export default Portfolio;