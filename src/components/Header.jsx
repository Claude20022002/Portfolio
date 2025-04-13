import React, { useState } from "react";
import {
    Stack,
    useTheme,
    useMediaQuery,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion"; // Import de framer-motion

export default function Header() {
    const navItems = ["Home", "Projets", "About me", "Contact"];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            component="header"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                width: "95%",
                height: "90px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                margin: "10px auto",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                position: "relative",
                zIndex: 1000,
            }}
        >
            {/* Logo avec effet de rotation au hover */}
            <motion.img
                src="/images/logo.png"
                alt="Logo de Mon Portfolio"
                style={{
                    width: isMobile ? "50px" : "70px",
                    height: isMobile ? "50px" : "70px",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease-in-out",
                    cursor: "pointer",
                }}
                whileHover={{
                    rotate: 360, // Rotation à 360 degrés au survol
                }}
                transition={{
                    duration: 1, // Durée de l'animation (en secondes)
                    ease: "linear", // Animation fluide
                }}
            />

            {isMobile ? (
                <Box>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        sx={{ zIndex: 2000 }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                    >
                        {navItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                component="a"
                                href={`#${item.toLowerCase()}`}
                                onClick={handleMenuClose}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ) : (
                <Stack
                    component="nav"
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {navItems.map((item, index) => (
                        <Typography
                            key={index}
                            component="a"
                            href={`#${item.toLowerCase()}`}
                            sx={{
                                textDecoration: "none",
                                color: theme.palette.text.primary,
                                fontWeight: "bold",
                                fontSize: "18px",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    background: theme.palette.primary.main,
                                    color: theme.palette.common.white,
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
                                },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Stack>
            )}
        </Stack>
    );
}
