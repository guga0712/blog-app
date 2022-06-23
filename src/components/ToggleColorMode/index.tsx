import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button
            onClick={() => toggleColorMode()}
            position="absolute"
            right={0}
            m="1rem"
        >
            {colorMode === "dark" ? (
                <SunIcon color="cyan.200" />
            ) : (
                <MoonIcon color="cyan.700" />
            )}
        </Button>
    );
};

export default ToggleColorMode;