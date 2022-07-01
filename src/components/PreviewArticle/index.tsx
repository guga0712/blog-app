import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface PreviewArticleProps {
    title: string;
    resume: string;
    href: string;
}

export default function PreviewArticle({ title, resume, href }: PreviewArticleProps) {
    return (
        <Box borderWidth='1px' borderColor='cyan.300' borderRadius='lg' w="400px" h="200px" textAlign="center" p="6" >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="15px"
                h="100%">
                <Heading fontSize="2xl">{title}</Heading>
                <Text width="100%" >{resume}... <Link href={href}><ChakraLink _hover={{ textDecoration: "none", color: "cyan.600" }} fontWeight="bold"><br />Ver mais <ArrowForwardIcon /></ChakraLink></Link></Text>
            </Flex>
        </Box >
    );
}