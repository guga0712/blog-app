import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface LinkHeaderProps {
    title: string;
    href: string;
}


export default function LinkHeader({ title, href }: LinkHeaderProps) {
    return (
        <Link href={href} >
            <ChakraLink
                bg="transparent"
                _hover={{
                    textDecoration: "none",
                    color: "cyan.600"
                }}
                fontWeight="600">{title}
            </ChakraLink>
        </Link>

    )
}