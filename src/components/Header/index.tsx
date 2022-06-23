import { Flex, Link } from "@chakra-ui/react";
import ToggleColorMode from "../ToggleColorMode";

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
            position="relative"
        >

            <Link
                bg="transparent"
                _hover={{ textDecoration: "none" }}>Catalogo</Link>
            <Link
                bg="transparent"
                _hover={{ textDecoration: "none" }}>Inicio</Link>

            <Link
                bg="transparent"
                _hover={{ textDecoration: "none" }}>Sobre</Link>
            <ToggleColorMode />

        </Flex >
    )
}