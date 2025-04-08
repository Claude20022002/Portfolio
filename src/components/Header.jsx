import React from "react";
import { HStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext"; // Importation du contexte pour le thème

export default function Header() {
    const { theme } = useTheme(); // Utilisation du contexte pour le thème

    // Couleur de texte dynamique selon le thème
    const textColor = theme === "light" ? "black" : "white"; // Exemple : noir en mode clair, blanc en mode sombre

    return (
        <HStack
            as="header"
            bg={theme === "light" ? "primary" : "secondary"} // Changement de couleur de fond en fonction du thème
            p={4}
            px={8}
            h="100px"
            spacing={6}
            align="center"
            justify="space-between"
            color={textColor} // Dynamique du texte en fonction du thème
            transition={"background-color 0.3s ease, color 0.3s ease"} // Transition pour le changement de couleur
        >
            {/* Réseaux sociaux */}
            <HStack as="nav" spacing={4}>
                <Link
                    href="https://facebook.com"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                >
                    <Box _hover={{ color: "#1877F2" }} cursor="pointer">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </Box>
                </Link>
                <Link
                    href="https://github.com"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                >
                    <Box _hover={{ color: "#6e5494" }} cursor="pointer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Box>
                </Link>
                <Link
                    href="https://linkedin.com"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                >
                    <Box _hover={{ color: "#0A66C2" }} cursor="pointer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </Box>
                </Link>
                <Link
                    href="https://twitter.com"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                >
                    <Box _hover={{ color: "#1DA1F2" }} cursor="pointer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </Box>
                </Link>
            </HStack>

            {/* Navigation */}
            <HStack spacing={6}>
                <Link
                    href="/"
                    fontSize="lg"
                    fontWeight="500"
                    color={textColor} // Dynamique en fonction du thème
                    textDecoration={"none"}
                    _hover={{ color: "blue.500" }}
                >
                    Home
                </Link>
                <Link
                    href="#about"
                    fontSize="lg"
                    fontWeight="500"
                    color={textColor} // Dynamique en fonction du thème
                    textDecor={"none"}
                    _hover={{ color: "blue.500" }}
                >
                    About
                </Link>
                <Link
                    href="#contact"
                    fontSize="lg"
                    fontWeight="500"
                    color={textColor} // Dynamique en fonction du thème
                    textDecoration={"none"}
                    _hover={{ color: "blue.500" }}
                >
                    Contact
                </Link>
            </HStack>
        </HStack>
    );
}
