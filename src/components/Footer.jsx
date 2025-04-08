import { VStack } from "@chakra-ui/react";
import React from "react";

export default function Footer({ backgroundColor }) {
    return (
        <>
            <VStack
                bg={backgroundColor}
                p={4}
                spacing={4}
                align="center"
                justify="center"
            >
                © 2023 My Website. All rights reserved.
            </VStack>
        </>
    );
}
