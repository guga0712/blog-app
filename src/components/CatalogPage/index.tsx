import { Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import PreviewArticle from "../PreviewArticle";

const articles = [
    {
        title: "Matéria 1",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        href: "catalog/articles/article1"
    },
    {
        title: "Matéria 2",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        href: "catalog/articles/article2"
    },
    {
        title: "Matéria 3",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        href: "",
    },
    {
        title: "Matéria 4",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        href: "",
    }
]

export default function CatalogPage() {
    return (
        <>
            <VStack gap="50px">
                <Heading textAlign="center" mt="50px">Nossas matérias</Heading>
                <Flex flexDirection="column" gap="50px">
                    <Flex
                        marginX="100px"
                        gap="50px">
                        <PreviewArticle title={articles[0].title} resume={articles[0].resume} href={articles[0].href} />
                        <PreviewArticle title={articles[1].title} resume={articles[1].resume} href={articles[1].href} />
                    </Flex>
                </Flex>
            </VStack>
        </>

    )
}