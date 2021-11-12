import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	VStack,
	Stack,
	Icon,
	Center,
} from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import { GiSunflower } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";

const Mission = () => {
	return (
		<>
			<Box my={["80px", null, "100px"]} as="section" id="mission">
				<Container maxW="container.xl">
					<Box>
						<VStack
							spacing="4"
							textAlign="center"
							mb={["50px", null, "100px"]}
						>
							<Heading size="xl" letterSpacing="wide">
								Наша Миссия
							</Heading>
							<Box height="5px" bg="#FF7A00" width="200px"></Box>
						</VStack>
						<Grid templateColumns={["1fr", null, "1fr 1fr 1fr"]} gap="4">
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="teal.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={BsPeople} boxSize="30px" />
									</Center>
								}
								title="Люди"
								description="Во главу угла мы ставим наших пользователей, все наши продукты предназначены для улучшения и облегчения жизни как можно большего числа людей. Мы гордимся созданными нами продуктами и надеемся, что те продукты, которые мы создадим в будущем, окажут еще больше положительного влияние на вашу жизнь."
							/>
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="red.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={GiSunflower} boxSize="30px" />
									</Center>
								}
								title="Страна:"
								description="OGOGO GROUP тесно сотрудничает с государственным сектором, мы намерены помочь в  трансформации в сфере госуправления, внедрении Data-Driven Government,  реализации государственных проектов и цифровизации всех сфер жизни наших граждан."
							/>
							<Description
								icon={
									<Center
										boxSize="50px"
										bg="orange.400"
										color="white"
										borderRadius="lg"
									>
										<Icon as={FiCheckCircle} boxSize="30px" />
									</Center>
								}
								title="Экосистема:"
								description="Мы ставим целью создать продукт которым будут пользоваться миллионы людей по всему миру, для этого нам нужна сильная IT и стартап экосистема.  OGOGO GROUP активно финансово вкладывает и развивает стартапы, обучает людей IT образованию, привлекает международных инвесторов и организации, проводит мероприятия, продвигает нашу экосистему за рубежом. Мы верим что из Кыргызстана скоро выйдет unicorn"
							/>
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
};

const Description = ({ icon, title, description }) => {
	return (
		<Stack
			spacing="6"
			padding="6"
			borderRadius="xl"
			border="1px solid rgba(0, 0, 0, 0.1)"
			alignItems="start"
		>
			{icon}
			<Heading fontWeight="medium" size="lg">
				{title}
			</Heading>
			<Text lineHeight="taller" color="#646464">
				{description}
			</Text>
		</Stack>
	);
};

export default Mission;
