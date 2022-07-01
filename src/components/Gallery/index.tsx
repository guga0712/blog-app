import { Button, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import PreviewArticle from "../PreviewArticle";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <Flex
            data-aos="fade-up"
            data-aos-delay="200"
            marginX="100px"
            height="100vh"
            align="center"
            justifyContent="center"
            // border="1px solid red"
            flexDirection="column"
            gap="50px"
        >
            <Heading>Nossas matérias</Heading>
            <Flex w="100%" justifyContent="center" gap="50px">
                <PreviewArticle title="Matéria 1" resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor" href="/catalog/articles/article1" />
                <PreviewArticle title="Matéria 2" resume="Lorem ipsum dolor sit amet,   consectetur adipiscing elit, sed diam nonumy eirmod tempor" href="/catalog/articles/article2" />
                <PreviewArticle title="Matéria 3" resume="Lorem ipsum dolor sit amet,   consectetur adipiscing elit, sed diam nonumy eirmod tempor" href="/catalog/articles/article3" />
            </Flex>
            <Link href="/catalog">
                <ChakraLink
                    fontWeight="600"
                    _hover={{ textDecoration: "none", color: "cyan.600" }}>Clique para ver mais matérias <ArrowForwardIcon />  </ChakraLink>
            </Link>
        </Flex>
    );
}