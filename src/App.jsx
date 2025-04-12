import React from "react";
import { Stack } from "@mui/material";

export default function App() {
    return (
        <Stack
            sx={{
                backgroundImage: `url("/public/fond/abstract-envelope.svg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "100%",
            }}
        >
            App
        </Stack>
    );
}
