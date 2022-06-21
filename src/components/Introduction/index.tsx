import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

export function Introduction() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex
                marginX="100px"
                height="calc(100vh - 80px)"
                align="center"
                justifyContent="center"
                border="1px solid red"
                flexDirection="column"
                gap="25px">
                <Heading textAlign="center">Bem vindo ao <br /><Text as="span" color="cyan.500">Nosso Blog!</Text></Heading>
                <Button
                    onClick={onOpen}
                    border="2px solid"
                    borderColor="cyan.500"
                    bgColor="cyan.500"
                    color="white"
                    _hover={{
                        bg: "transparent",
                        color: "cyan.500"
                    }}>Saiba
                    mais</Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent color="cyan.50" bgColor="gray.900">
                        <ModalHeader >Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt debitis velit doloribus nulla minima voluptas, deleniti nemo vitae perferendis quas tempore assumenda explicabo ipsam officiis architecto optio fugit alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod explicabo aliquam repellendus reiciendis amet ipsum vero, sed dicta minima repellat omnis, eveniet consequatur ullam, est obcaecati deleniti maiores accusantium. Sed.</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='cyan' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </>
    );
}