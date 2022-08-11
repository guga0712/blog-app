import { Avatar, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface CommentProps {
    name: string;
    comment: string;
}

export default function Comment({ name, comment }: CommentProps) {
    const [color, setColor] = useState("");

    const changeColor = () => {
        setColor('red.300')
    }

    return (
        <Flex width="50%" align="center" gap="20px" borderBottom="1px solid" borderColor="gray.600" _last={{ border: "none" }}>
            <Flex height="auto" align="flex-left" justifyContent="space-between" flexDirection="column" pb="25px" textAlign="start">
                <Flex width="100%" h="auto" align="center">
                    <Avatar w="50px" h="50px" marginRight="20px"></Avatar>
                    <Text fontWeight="bold" fontSize="20px">{name}</Text>
                </Flex>
                <Text marginLeft="70px" textAlign="left" >{comment}</Text>
            </Flex>
            <Button w="20px" bg="none" h="20px" p="0" onClick={changeColor} _hover={{ bg: 'none' }} _active={{ bg: 'none' }}><Icon fontSize="25px" color={color} as={FaHeart} /> </Button>
        </Flex>

    );
}