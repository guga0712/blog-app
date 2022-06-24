import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

interface PreviewArticleProps {
    title: string;
    resume: string;
    href: string;
}

export default function PreviewArticle({ title, resume, href }: PreviewArticleProps) {
    return (
        <Box borderWidth='1px' borderColor='cyan.300' borderRadius='lg' maxW='xs' textAlign="center" p="6" maxH="200px" >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                h="100%">
                <Heading fontSize="2xl">{title}</Heading>
                <Text>{resume}... <Link href={href}><ChakraLink fontWeight="bold">Ver mais</ChakraLink></Link></Text>
            </Flex>
        </Box >
    );
}