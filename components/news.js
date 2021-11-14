import {
	Box,
	Container,
	Stack,
	Heading,
	IconButton,
	Text,
	useBreakpointValue,
	Image,
	Button,
	Icon,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Title from "./title";
import { BsArrowRight } from "react-icons/bs";
import NextLink from "next/link";
import { BsCalendarEvent } from "react-icons/bs";

function News({ posts }) {
	const [slideIndex, setSlideIndex] = useState(0);

	const slidesPerView = useBreakpointValue({
		base: 1,
		md: 3,
	});

	const spacing = useBreakpointValue({
		base: 0,
		md: 16,
	});

	const [sliderRef, slider] = useKeenSlider({
		mode: "free-snap",
		spacing,
		slidesPerView,
		dragSpeed: 0.5,
		duration: 1000,
		slideChanged(s) {
			setSlideIndex(s.details().relativeSlide);
		},
	});

	return (
		<Box as="section" my={["100px", null, "150px"]}>
			<Container maxW="container.xl">
				<Title mb={["50px", null, "100px"]}>News</Title>
			</Container>
			{slider && (
				<Box position="relative">
					<Box
						ref={sliderRef}
						className="keen-slider"
						pl={["0px", null, "100px"]}
					>
						{posts.map(({ cover, slug, title, date }) => (
							<Stack
								key={`${slug}`}
								className="keen-slider__slide"
								flexDirection="column"
								spacing={4}
							>
								<Image src={cover} objectFit="cover" height="300px" />
								<Stack
									spacing={3}
									px={[4, null, 0]}
									pb={4}
									alignItems="start"
								>
									<Stack
										direction="row"
										spacing="3"
										alignItems="center"
										color="gray.500"
									>
										<Icon as={BsCalendarEvent} />
										<Text>{date}</Text>
									</Stack>
									<Heading fontSize={["lg", null, "xl"]}>
										{title}
									</Heading>
									<NextLink href={`blog/${slug}`} passHref>
										<Button
											as="a"
											variant="link"
											colorScheme="or"
											rightIcon={<Icon as={BsArrowRight} />}
											position="relative"
										>
											Details
										</Button>
									</NextLink>
								</Stack>
							</Stack>
						))}
					</Box>

					{slideIndex === 0 ? null : (
						<SliderButton
							position="absolute"
							left={[4, null, 8]}
							top="50%"
							transform="translateY(-50%)"
							icon={<IoChevronBack boxSize={8} />}
							onClick={() => {
								slider.prev();
							}}
						/>
					)}

					{(slidesPerView === 3 && slideIndex === 2) ||
						(slidesPerView === 1 && slideIndex === 4 ? null : (
							<SliderButton
								position="absolute"
								right={[4, null, 8]}
								top="50%"
								transform="translateY(-50%)"
								icon={<IoChevronForward boxSize={8} />}
								onClick={() => {
									slider.next();
								}}
							/>
						))}
				</Box>
			)}
		</Box>
	);
}

const SliderButton = ({ icon, onClick, ...props }) => {
	const buttonSize = useBreakpointValue({
		base: "md",
		md: "lg",
	});

	return (
		<IconButton
			size={buttonSize}
			variant="outline"
			_hover={{
				color: "white",
				bg: "saryy",
			}}
			_active={{
				transform: "translateY(-50%) scale(1.1)",
			}}
			borderColor="white"
			borderRadius="full"
			color="white"
			icon={icon}
			onClick={onClick}
			{...props}
		/>
	);
};

export default News;
