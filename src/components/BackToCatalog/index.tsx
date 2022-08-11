import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function BackToCatalog() {
    return (
        <Link href="/catalog">
            <ChakraLink
                fontWeight="600"
                mt="25px"
                _hover={{ textDecoration: "none", color: "cyan.600" }}
                fontSize="3xl"> <ArrowBackIcon /> Voltar ao Catálogo</ChakraLink>
        </Link>
    );
}