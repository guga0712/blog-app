import { Flex, Link } from "@chakra-ui/react";
import LinkHeader from "../LinkHeader";
import ToggleColorMode from "../ToggleColorMode";

export function Header() {
    return (
        <Flex
            as="header"
            h="20"
            marginX="100px"
            alignItems="center"
            justifyContent="center"
            // border="1px solid red"
            gap="50px"
            position="relative"
        >
            <LinkHeader title="Catálogo" />
            <LinkHeader title="Inicio" />
            <LinkHeader title="Sobre" />
            <ToggleColorMode />

        </Flex >
    )
}