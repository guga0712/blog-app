import { Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import Footer from "../Footer";
import PreviewArticle from "../PreviewArticle";

export default function CatalogPage() {
    return (
        <>
            <Flex marginX="100px"
                align="center"
                flexDirection="column"
                gap="25px">
                <Heading textAlign="center" mt="50px">Nossas matérias</Heading>
                <Flex width="100%" justifyContent="center" gap="50px">
                    <PreviewArticle title="O que é Single Page Application (SPA)?" resume="Single Page Application SPA Single Page Application é uma aplicação ou web site que interage com o usuário " href="/catalog/articles/article1"></PreviewArticle>
                    <PreviewArticle title="Para que serve o create-react-app (CRA)" resume="O create-react-app é um conjunto de ferramentas e funcionalidades pré-configuradas para que você possa iniciar um projeto React." href="/catalog/articles/article2"></PreviewArticle>
                    <PreviewArticle title="Matéria 1" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                </Flex>
                <Flex width="100%" justifyContent="center" gap="50px">
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                </Flex>
                <Flex width="100%" justifyContent="center" gap="50px" mb="50px">
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                    <PreviewArticle title="Matéria 5" resume="dasdasdasdasdasdasjdadajsdoiasjdsndasjdjasdasdjisaoasd" href="/"></PreviewArticle>
                </Flex>
            </Flex>
            <Footer />
        </>

    )
}