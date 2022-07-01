import { Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import Socials from "./Socials";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
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
                    <Flex flexDirection="column" align="center">
                        <Text fontSize="3xl" fontWeight="700">Gustavo Martins</Text>
                        <Text
                            textAlign="center"
                            width="80%"
                            height="80px">
                            Formado em Ciencia da computação, estudando Front-end, focado no Framework Next.js
                        </Text>
                    </Flex>

                    <Socials github="https://github.com/guga0712" linkedin="https://www.linkedin.com/in/gustavo-rodrigues-martins-430aa0197/" facebook="https://www.facebook.com/gusmartins/" />
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
                    <Flex flexDirection="column" align="center">
                        <Text fontSize="3xl" fontWeight="700">Mateus Gomes</Text>
                        <Text
                            textAlign="center"
                            width="80%"
                            height="80px">
                            Estudante de Ciencia da computação, iniciou na programação através do Python e agora está estudando desenvolvimento Front-End
                        </Text>
                    </Flex>
                    <Socials github="https://github.com/matthewzao" linkedin="https://www.linkedin.com/in/mateus-gomes-932a28208/" facebook="https://www.facebook.com/MateusMoraes270" />
                </Flex>
            </Flex>
        </Flex >
    );
}