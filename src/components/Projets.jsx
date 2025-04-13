import { Stack } from "@mui/material";
import React from "react";

export default function Projets() {
    return (
        <Stack
            id="projets"
            component="section"
            direction={{ xs: "column", md: "row" }}
            sx={{
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                minHeight: "100vh",
                gap: { xs: "40px", sm: "20px" },
                padding: "20px",
                margin: "0 auto",
            }}
        >
            Projects
        </Stack>
    );
}
