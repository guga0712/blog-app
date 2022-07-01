import { Code, Flex, Heading, Text } from "@chakra-ui/react";
import { resolveMotionValue } from "framer-motion";
import Head from "next/head";
import BackToCatalog from "../../../components/BackToCatalog";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";

export default function Article2() {
    const article = {
        title: "Para que serve o create-react-app (CRA)",
        resume: "O create-react-app é um conjunto de ferramentas e funcionalidades pré-configuradas para que você possa iniciar"
    }
    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <Header />
            <Flex marginX="100px" align="center" flexDirection="column" mb="50px">
                <Heading mt="50px" mb="50px" textAlign="center">{article.title}</Heading>
                <Text textAlign="center">
                    O create-react-app é um conjunto de ferramentas e funcionalidades pré-configuradas para que você possa iniciar um projeto React.
                    <br /><br /><br />
                    Normalmente este pacote é indicado aos iniciantes no aprendizado de React para que possam ir direto ao código e testar seus conhecimentos, o <Code>create-react-app</Code> já traz diversas configurações como Babel, Webpack, Scripts e outros recursos prontos para você. Isso economiza seu tempo e facilita na criação de novos app em React.
                    <br /><br /><br />
                    Como utilizar o Create React App?
                    Para que você possa iniciar seus projetos com <Code>create-react-app</Code> primeiro é necessário que você faça a instalação global deste pacote. Considerando que você já possui o npm instalado em sua máquina execute o seguinte comando no terminal ou console: npm install -g create-react-app
                    <br /><br /><br />
                    Pronto, agora você pode criar novos projetos com o pacote pré-configurado utilizando o comando <Code>create-react-app</Code>. Para criar um novo projeto selecione a pasta em que deseja criar e execute o comando: create-react-app nome-do-seu-app. Simples né? Depois é só dar cd nome-do-seu-app e iniciar o desenvolvimento.
                    <br /><br /><br />
                    Como mencionei este pacote já disponibiliza alguns scripts em seu package.json, estando dentro da pasta de seu projeto você pode executar os seguintes comandos via terminal:
                    <br /><br /><br />
                    npm start: inicia o servidor de desenvolvimento e fica aguardando alterações nos arquivos para que possa atualizar a página. Este comando já inicia um servidor no localhost:3000 npm run build: compacta todo o seu projeto para que possa ser enviado em produção, é essencial executar este comando antes de enviar seu projeto para um servidor online (fazer o deploy). npm test: Inicia os testes em seu app e permite que você realize testes com Jest npm run eject: permite que você “desbloqueie” os arquivos de configuração do create-react-app dando possibilidade de você criar as próprias configurações de itens como webpack por exemplo
                    <br /><br /><br />
                    Resumidamente essas são algumas das funcionalidades e vantagens do create-react-app, recomendo que você instale e teste todas as possibilidades.

                </Text>
                <BackToCatalog />
            </Flex >
            <Footer />
        </>
    );
}