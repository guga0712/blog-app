import { Link } from "@chakra-ui/react";

interface LinkHeaderProps {
    title: string;
}


export default function LinkHeader({ title }: LinkHeaderProps) {
    return (

        <Link
            bg="transparent"
            _hover={{
                textDecoration: "none",
                color: "cyan.600"
            }}
            fontWeight="600">{title}
        </Link>
    )
}