import { Flex, Text, Avatar, Box, Button, HStack } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            h="20"
            marginX="auto"
            mt="4"
            px="6"
            alignItems="center"
            bg="purple.500"
            borderRadius="8"
        >

            <Text
                color="red.400"
                marginLeft="1"
                width="64"
                marginX="100"
                fontSize="Blog Dos"
                textAlign="center"
            >

            </Text>
            <HStack >
                <Flex textAlign="center">
                    <Button bg="transparent">Inicio</Button>
                    <Button bg="transparent">Inicio</Button>
                </Flex>
            </HStack>
        </Flex>
    )
}
