import { Stack } from "@mui/material";
import React from "react";

export default function Projects() {
    return (
        <Stack
            id="projects"
            component="section"
            direction={{ xs: "column", md: "row" }}
            sx={{
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                gap: { xs: "40px", sm: "20px" },
                padding: "20px",
                margin: "0 auto",
            }}
        >
            Projects
        </Stack>
    );
}
