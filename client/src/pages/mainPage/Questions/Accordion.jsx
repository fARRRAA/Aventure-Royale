import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system";
import { extendTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
    container: defineStyle({
        boxShadow: "sm",
        _focus: {
            boxShadow: "outline",
        },
    }),
});

// Defining a custom variant called outline
const outline = definePartsStyle((props) => {
    const { colorScheme: c } = props;
    return {
        container: {
            
        },
        button: {
            color: "gray.500",
            _hover: {
                color: "gray.600",
            },
            _focus: {
                color: "blue.500",
            },
            fontFamily: "mono",
        },
    };
});

const variants = {
    outline,
};

const size = {
    md: defineStyle({
        w: 5,
        h: 5,
    }),
};

const sizes = {
    md: definePartsStyle({
        icon: size.md,
    }),
};

export const accordionTheme = defineMultiStyleConfig({
    baseStyle,
    variants,
    sizes,
    defaultProps: {
        size: "md",
        variant: "outline",
    },
});