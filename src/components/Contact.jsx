import React from "react";
import { Stack } from "@mui/material";

export default function Contact() {
    return (
        <Stack
            id="contact"
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
            Contact
        </Stack>
    );
}
