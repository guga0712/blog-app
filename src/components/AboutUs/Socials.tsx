import { Link, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

interface SocialsProps {
    github: string;
    linkedin: string;
    facebook: string;
}

export default function Socials({ github, linkedin, facebook }: SocialsProps) {
    return (
        <>
            <Flex width="80%" justifyContent="center" gap="20px">
                {/* <Link href={github} target="_blank" color="cyan.500" _hover={{ color: "cyan.600" }}><FaGithub size="30px" /></Link>
                <Link href={linkedin} target="_blank" color="cyan.500" _hover={{ color: "cyan.600" }}><FaLinkedin size="30px" /></Link>
                <Link href={facebook} target="_blank" color="cyan.500" _hover={{ color: "cyan.600" }}><FaFacebook size="30px" /></Link> */}
                <Link href={github} target="_blank" bg="cyan.500" p="5px" borderRadius="5px" color="white" _hover={{ bg: "cyan.600" }}><FaGithub size="30px" /></Link>
                <Link href={linkedin} target="_blank" bg="cyan.500" p="5px" borderRadius="5px" color="white" _hover={{ bg: "cyan.600" }}><FaLinkedin size="30px" /></Link>
                <Link href={facebook} target="_blank" bg="cyan.500" p="5px" borderRadius="5px" color="white" _hover={{ bg: "cyan.600" }}><FaFacebook size="30px" /></Link>
            </Flex>
        </>

    );
}