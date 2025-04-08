import React, { createContext, useState, useContext } from "react";

// Création du contexte pour le thème
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Initialisation du thème à "light"
    const [theme, setTheme] = useState("light");

    // Fonction pour alterner entre "light" et "dark"
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useTheme doit être utilisé à l'intérieur de ThemeProvider"
        );
    }
    return context;
};
