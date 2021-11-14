import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Title from "./title";

const destinations = [
	{
		image: "/news-students.jpeg",
		description:
			"This is the description for destination number 1 which is Kyrgyzstan",
		title: "Lorem Ipsum Dolor Sit Amet Consectur",
	},
	{
		image: "/news-phones.jpeg",
		description:
			"This is the description for destination number 2 which is Kazakhstan",
		title: "Lorem Ipsum Dolor Sit Amet Consectur",
	},
	{
		image: "/news-bishkek.jpeg",
		description:
			"This is the description for destination number 3 which is Uzbekistan",
		title: "Lorem Ipsum Dolor Sit Amet Consectur",
	},
	{
		image: "/news-children.jpeg",
		description:
			"This is the description for destination number 2 which is Kazakhstan",
		title: "Lorem Ipsum Dolor Sit Amet Consectur",
	},
];

function News() {
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
		<>
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
							{destinations.map(({ image, description, title }) => (
								<AspectRatio
									key={`${title}`}
									className="keen-slider__slide"
									ratio={[1, null, 5 / 4]}
								>
									<Box
										boxSize="full"
										borderRadius={[0, null, "md"]}
										overflow="hidden"
										position="relative"
									>
										<Box position="relative" boxSize="full">
											<NextImage
												src={image}
												alt={title}
												layout="fill"
												objectFit="cover"
											/>
										</Box>
										<Flex
											boxSize="100%"
											flexDirection="column"
											position="absolute"
											top="0"
											left="0"
											background="linear-gradient(to top, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.1) 50%)"
											padding="4"
											justifyContent="flex-end"
										>
											<Box
												bg="#fff"
												padding={[4, null, 4]}
												position="relative"
												_after={{
													content: "''",
													position: "absolute",
													top: -2,
													left: 2,
													width: "full",
													height: "full",
													border: "2px solid",
													borderColor: "or.400",
												}}
											>
												<Heading
													fontSize={["lg", null, "xl"]}
													mb="2"
												>
													{title}
												</Heading>
												<Text fontSize="sm">{description}</Text>
											</Box>
										</Flex>
									</Box>
								</AspectRatio>
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
		</>
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
