import React from "react";
import { Stack } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
    return (
        <Stack
            sx={{
                backgroundImage: `url("/public/fond/abstract-envelope.svg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                minWidth: "100vw",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: 4,
                padding: 2,
            }}
        >
            <Header />
            <Home />
        </Stack>
    );
}
