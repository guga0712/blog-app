import { Flex, Link } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            h="20"
            marginX="100px"
            alignItems="center"
            justifyContent="center"
            border="1px solid red"
            gap="50px"
        >
            <Link
                bg="transparent"
                _hover={{ textDecoration: "none" }}>Inicio</Link>
        </Flex >
    )
}