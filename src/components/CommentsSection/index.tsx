import { Button, Flex, Heading } from "@chakra-ui/react";
import Comment from "./Comment";

export default function CommentsSection() {
    return (
        <Flex marginX="100px" align="center" flexDirection="column" gap="25px" borderTop="1px solid" borderColor="gray.600" paddingTop="25px" marginBottom="50px">
            <Heading fontSize="2xl" fontWeight="600">Comentários</Heading>
            <Comment name="Fulano de Tal" comment="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum d" />
            <Comment name="Fulano de Tal" comment="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum d" />
            <Comment name="Fulano de Tal" comment="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum d" />
            <Comment name="Fulano de Tal" comment="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum d" />
            <Button
                bgColor="cyan.400"
                // color="white"
                _hover={{
                    bg: "cyan.600",
                }}
                _active={{
                    bg: "cyan.700",
                }}>Adicionar</Button>
        </Flex>
    );
}