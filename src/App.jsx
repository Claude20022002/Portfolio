import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Projets from "./components/Projets";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import toast from "react-hot-toast";
import { useMode } from "./context/ThemeContext";

export default function App() {
    const { mode } = useMode() || { mode: "light" }; // Fallback pour éviter les erreurs

    useEffect(() => {
        toast.success("Welcome to my portfolio!", {
            duration: 4000,
            position: "top-center",
            style: {
                background: "#4caf50",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
            },
        });
        return () => {
            toast.dismiss();
        };
    }, []);

    return (
        <Stack
            sx={{
                backgroundImage: `url(${
                    mode === "light"
                        ? "/fond/abstract-envelope.svg"
                        : "/fond/rose-petals.svg"
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                minWidth: "100vw",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: 4,
                padding: 2,
                boxSizing: "border-box",
            }}
        >
            <Header />
            <Home />
            <AboutMe />
            <Projets />
            <Contact />
            <Stack
                sx={{
                    position: "relative",
                    width: "95%",
                    margin: "0 auto",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    borderTop: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "10px",
                    backgroundColor: mode === "light" ? "#fff" : "#000",
                    color: mode === "light" ? "#000" : "#fff",
                }}
            >
                <p>© 2025 Claude20022002. All rights reserved.</p>
                <p>Made with ❤️ by Claude20022002</p>
            </Stack>
        </Stack>
    );
}
