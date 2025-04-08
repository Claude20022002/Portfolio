import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Importation de l'icône faMoon
import { useTheme } from "../context/ThemeContext";
import React from "react";

export default function Footer({ backgroundColor }) {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <VStack
                bg={backgroundColor}
                p={4}
                spacing={4}
                align="center"
                justify="center"
                transition={"background-color 0.3s ease, color 0.3s ease"} // Transition pour le changement de couleur
            >
                <Heading as="h2" size="lg" textAlign="center" color={"black"}>
                    Footer Section
                </Heading>
                <IconButton
                    onClick={toggleTheme}
                    variant="ghost"
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? (
                        <FontAwesomeIcon icon={faSun} size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} size="lg" />
                    )}
                </IconButton>
            </VStack>
        </>
    );
}
