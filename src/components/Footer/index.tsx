import { Flex } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex
            as="footer"
            h="20"
            marginX="100px"
            borderTop="1px solid"
            borderColor="gray.600"
            align="center"
            justifyContent="center"
        >
            Our blog - 2022
        </Flex>
    );

}