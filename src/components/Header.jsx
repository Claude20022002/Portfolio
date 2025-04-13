import { Stack } from "@mui/material";
import React from "react";

export default function Header() {
    const navItems = ["Home", "Projets", "About me", "Contact"];
    return (
        <Stack
            component="header"
            sx={{
                backgroundColor: "transparent",
                width: "95%",
                height: "90px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                margin: "0 auto",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
            }}
        >
            <img
                src="/public/images/logo.png"
                alt="Logo de l'application"
                style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
            />
            <Stack component="nav" direction="row" alignItems="center">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            margin: "0 15px",
                            textDecoration: "none",
                            color: "#333",
                            fontWeight: "bold",
                            fontSize: "18px",
                        }}
                    >
                        {item}
                    </a>
                ))}
            </Stack>
        </Stack>
    );
}
