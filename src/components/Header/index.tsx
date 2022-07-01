import { Flex } from "@chakra-ui/react";
import Link from "next/link";
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
            borderBottom="1px solid"
            borderColor="gray.600"
            gap="50px"
            position="relative"
        >
            <LinkHeader title="Catálogo" href="/catalog" />
            <LinkHeader title="Inicio" href="/" />
            <LinkHeader title="Sobre" href="/sobre" />
            <ToggleColorMode />

        </Flex >
    )
}