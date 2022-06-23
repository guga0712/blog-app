import { Box, Heading, Link, Text } from "@chakra-ui/react";

interface PreviewArticleProps {
    title: string;
    resume: string;
}

export default function PreviewArticle({ title, resume }: PreviewArticleProps) {
    return (
        <Box borderWidth='1px' borderRadius='lg' maxW='xs' textAlign="center" p="6">
            <Heading marginBottom="20px" fontSize="2xl">{title}</Heading>
            <Text>{resume}... <Link fontWeight="bold">Ver mais</Link></Text>
        </Box >
    );
}