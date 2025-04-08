import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Heading } from "@chakra-ui/react";

export default function Home() {
    const { theme } = useTheme();
    const textColor = theme === "light" ? "black" : "white"; // Exemple : blanc en mode clair, gris en mode sombre
    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#f5efef" : "#1c1a1a",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
        >
            <Heading
                as="h1"
                size="2xl"
                color={textColor}
                textAlign="center"
                mt={10}
            >
                Bienvenue sur notre site !
            </Heading>
        </div>
    );
}
