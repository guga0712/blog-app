import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../../../components/Header";

export default function Article1() {
    return (
        <>
            <Head>
                <title>Article 1</title>
            </Head>
            <Header />
            <Heading mt="50px" textAlign="center">Matéria 1</Heading>
        </>
    );
}