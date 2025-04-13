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
                transition: "background-image 0.5s ease-in-out",
            }}
        >
            <Header />
            <Home />
            <AboutMe />
            <Projets />
            <Contact />
        </Stack>
    );
}
