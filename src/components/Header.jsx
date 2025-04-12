import { Stack } from "@mui/material";
import React from "react";

export default function Header() {
    return (
        <Stack
            component="header"
            sx={{
                backgroundColor: "transparent",
                width: "100%",
                height: "150px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src="/public/logo.png"
                alt="Logo de l'application"
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
            />
            <h1
                style={{
                    fontSize: "2rem",
                    marginLeft: "20px",
                    color: "#333",
                }}
            >
                Mon Application
            </h1>
        </Stack>
    );
}
