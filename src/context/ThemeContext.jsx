import React, { createContext, useContext, useState } from "react";

export const ThemeMode = createContext();

export default function ThemeContext({ children }) {
    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ThemeMode.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeMode.Provider>
    );
}

export const useMode = () => useContext(ThemeMode);
