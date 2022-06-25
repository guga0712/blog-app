import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../../components/Header";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>About us</title>
            </Head>
            <Header />
            <Heading mt="50px" textAlign="center">Sobre</Heading>
        </>
    );
}