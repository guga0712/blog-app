import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function AboutUs() {
    return (
        <Flex
            marginX="100px"
            height="100vh"
            align="center"
            justifyContent="center"
            flexDirection="column"
            gap="50px">
            <Heading>Sobre nós</Heading>
            <Flex
                justifyContent="space-around"
                width="100%"
            >
                <Flex flexDirection="column" align="center" maxWidth="50%" gap="20px">
                    <Image
                        src="https://avatars.githubusercontent.com/u/77812935?v=4"
                        alt="Gustavo"
                        borderRadius="100%"
                        height="300px"
                        border="5px solid"
                        borderColor="cyan.500"
                        padding="10px" />
                    <Heading>Gustavo Martins</Heading>
                    <Text textAlign="center" width="80%">Formado em Ciencia da computação, estudando Front-end, focado no Framework Next.js</Text>
                </Flex>
                <Flex flexDirection="column" align="center" maxWidth="50%" gap="20px"   >
                    <Image
                        src="https://avatars.githubusercontent.com/u/92950284?v=4"
                        alt="Mateus"
                        borderRadius="100%"
                        height="300px"
                        border="5px solid"
                        borderColor="cyan.500"
                        padding="10px" />
                    <Heading>Mateus Gomes</Heading>
                    <Text textAlign="center" width="80%">Estudante de Ciencia da computação, iniciou na programação através do Python e agora está estudando desenvolvimento Front-End</Text>
                </Flex>
            </Flex>
        </Flex >
    );
}