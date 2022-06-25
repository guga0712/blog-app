import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import ToggleColorMode from "../ToggleColorMode";


export function Introduction() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex
                marginX="100px"
                height="calc(100vh - 80px)"
                align="center"
                justifyContent="center"
                // border="1px solid red"
                flexDirection="column"
                gap="25px">
                <Heading
                    textAlign="center">Bem
                    vindo
                    ao
                    <br />
                    <Text
                        as="span"
                        position="relative"
                    // _after={{
                    //     content: "''",
                    //     width: '100%',
                    //     height: '30%',
                    //     position: 'absolute',
                    //     bottom: 1,
                    //     left: 0,
                    //     bg: 'cyan.00',
                    //     zIndex: -1,
                    // }}
                    >Nosso
                        Blog!</Text></Heading>
                <Button
                    onClick={onOpen}
                    bgColor="cyan.400"
                    // color="white"
                    _hover={{
                        bg: "cyan.600",
                    }}
                    _active={{
                        bg: "cyan.700",
                    }}>Saiba
                    mais</Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader >Sobre o blog</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt debitis velit doloribus nulla minima voluptas, deleniti nemo vitae perferendis quas tempore assumenda explicabo ipsam officiis architecto optio fugit alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod explicabo aliquam repellendus reiciendis amet ipsum vero, sed dicta minima repellat omnis, eveniet consequatur ullam, est obcaecati deleniti maiores accusantium. Sed.</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                mr={3}
                                onClick={onClose}
                                bgColor="cyan.400"
                                _hover={{
                                    bg: "cyan.600",
                                }}
                                _active={{
                                    bg: "cyan.700",
                                }}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </>
    );
}