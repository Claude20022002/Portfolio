import React, { createContext, use, useContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContext() {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            ThemeContext
        </ThemeContext.Provider>
    );
}

export const useMode = useContext(ThemeContext);
