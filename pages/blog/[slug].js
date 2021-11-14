import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	Image,
	Stack,
	Icon,
	Button,
} from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Client } from "../../lib/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import NextLink from "next/link";
import { BsCalendarEvent } from "react-icons/bs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsArrowRight } from "react-icons/bs";

export async function getStaticProps({ params, locale }) {
	const posts = await Client().query(
		Prismic.Predicates.at("document.type", "post"),
		{
			pageSize: 100,
			orderings: "[document.last_publication_date desc]",
		}
	);

	const post = await Client().getByUID("post", params.slug);

	console.dir(post, { depth: null });

	return {
		props: {
			posts: posts.results.map((el) => ({
				slug: el.uid,
				title: el.data.title,
				cover: el.data.cover.url,
				content: el.data.content,
				date: el.data.date,
			})),
			post: {
				slug: post.uid,
				title: post.data.title,
				cover: post.data.cover.url,
				content: post.data.content,
				date: post.data.date,
			},
			...(await serverSideTranslations(locale, ["common"])),
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "post"),
		{
			pageSize: 100,
			orderings: "[document.last_publication_date desc]",
		}
	);

	return {
		paths: response.results.map((el) => ({
			params: {
				slug: el.uid,
			},
		})),
		fallback: true,
	};
}

const PostPage = ({ posts, post }) => {
	if (!posts || !post) {
		return <Box>loading</Box>;
	}

	return (
		<>
			<Header />
			<Box py={["100px"]}>
				<Image
					src={post.cover}
					height={["300px", null, "400px"]}
					objectFit="cover"
					mb="10"
					width="100%"
					objectPosition="top"
				/>
				<Container maxW="container.lg">
					<Box>
						<Heading as="h1" size="lg" mb="10">
							{post.title}
						</Heading>
						<Grid
							templateColumns={["1fr", null, null, "2fr 1fr"]}
							gap="20"
						>
							<Box>
								<Stack
									direction="row"
									spacing="3"
									alignItems="center"
									pb="6"
									color="gray.500"
								>
									<Icon as={BsCalendarEvent} />
									<Text fontSize="lg">{post.date}</Text>
								</Stack>
								<Box className="blog-content">
									<RichText render={post.content} />
								</Box>
							</Box>
							<Stack spacing="10">
								<Heading color="orange.500" fontSize={["2xl"]}>
									Другие статьи
								</Heading>
								{posts.map(({ slug, title, cover, date }) => (
									<Stack key={`${slug}`} spacing={4}>
										<Image
											src={cover}
											objectFit="cover"
											height={["300px", null, null, "200px"]}
										/>
										<Stack
											spacing={2}
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
											<Heading size="md">{title}</Heading>
											<NextLink
												href={`/blog/${encodeURIComponent(slug)}`}
												passHref
											>
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

											{/* <Text fontSize="sm">{description}</Text> */}
											{/* <Button
                                    variant="link"
                                    colorScheme="or"
                                    rightIcon={<Icon as={BsArrowRight} />}
                                    position="relative"
                                 >
                                    Details
                                 </Button> */}
										</Stack>
									</Stack>
								))}
							</Stack>
						</Grid>
					</Box>
				</Container>
			</Box>

			<Footer />
		</>
	);
};

export default PostPage;
