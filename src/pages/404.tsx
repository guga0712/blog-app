import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Not found</title>
            </Head>
            <Flex
                w="100%"
                h="100vh"
                justifyContent="center"
                align="center"
                flexDirection="column"
            >
                <Heading>Rota não encontrada</Heading>
                <Link href="/"><ChakraLink>Home</ChakraLink></Link>
            </Flex>
        </>

    );
}