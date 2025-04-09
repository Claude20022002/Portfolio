import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
    Heading,
    VStack,
    Text,
    Image,
    HStack,
    Box,
    Button,
} from "@chakra-ui/react";

export default function Home() {
    const { theme } = useTheme();
    const bgColor = theme === "light" ? "#F87060" : "#102542";
    const textColor = theme === "light" ? "#102542" : "#F87060";

    return (
        <Box
            bg={bgColor}
            color={textColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="background-color 0.3s ease, color 0.3s ease"
            height="100vh"
        >
            <HStack spacing={4} p={4} align="center">
                <VStack spacing={4}>
                    <Heading as="h1" size="4xl" textAlign="center" mt={10}>
                        Who am I ?
                    </Heading>
                    <Text fontSize="xl" textAlign="left" mt={4} mb={4}>
                        Determined, serious, autonomous and curious. I am
                        passionate about web development and website creation.
                        In order to make web development a skill, I keep my
                        knowledge up to date by taking online courses and
                        practicing...
                    </Text>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        fontWeight={"bold"}
                        border={"2px solid #F87060"} // Bordure du bouton
                        px={8}
                        py={4}
                        fontSize="lg"
                        borderRadius="full"
                        mt={4}
                        bg={bgColor} // Utilise bgColor pour le fond du bouton
                        color={textColor} // Utilise textColor pour la couleur du texte
                        _hover={{
                            bg: theme === "light" ? "#E44C32" : "#1B3B53", // Couleur de fond au survol
                            color: theme === "light" ? "#F1F1F1" : "#F1F1F1", // Couleur du texte au survol
                        }}
                        _focus={{
                            outline: "none", // Retirer le contour au focus
                            boxShadow: "0 0 0 2px rgba(255, 134, 80, 0.6)", // Ombre autour du bouton au focus
                        }}
                    >
                        Follow me
                    </Button>
                </VStack>
                <Image
                    htmlWidth="400px"
                    htmlHeight="400px"
                    src="/public/images/avatar.png"
                    alt="Avatar"
                />
            </HStack>
        </Box>
    );
}
