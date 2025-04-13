import { Button, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import SplitText from "./SplitText/SplitText";
import Typewriter from "./typerwrite/Typewriter";
import { motion } from "framer-motion";
import { useMode } from "../context/ThemeContext";

export default function Home() {
    const { mode, toggleMode } = useMode() || { mode: "light" }; // Fallback pour éviter les erreurs
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <Stack
            id="home"
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
            {/* Texte de la section */}
            <Stack
                component="div"
                className="home-text"
                sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: { xs: "center", md: "left" },
                    padding: { xs: "0 20px", md: "9px" },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                        fontWeight: "bold",
                    }}
                >
                    <SplitText
                        text="Who am I ?"
                        className="text-2xl font-semibold box-1"
                        delay={100}
                        animationFrom={{
                            opacity: 0,
                            transform: "translate3d(0,50px,0)",
                        }}
                        animationTo={{
                            opacity: 1,
                            transform: "translate3d(0,0,0)",
                        }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                        taille="h1"
                        fontSize={{
                            xs: "3rem",
                            sm: "4.5rem",
                            md: "5.5rem",
                        }}
                    />
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        marginTop: "20px",
                        fontSize: {
                            xs: "1.5rem",
                            sm: "2.0rem",
                            md: "2.5rem",
                        },
                        fontWeight: "bold",
                        background: `linear-gradient(${
                            mode === "light"
                                ? "45deg, #2196F3 30%, #21CBF3 90%"
                                : "45deg, #FF4081 30%, #FF80AB 90%"
                        })`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: [
                                "Claude",
                                "Junior Web Developer",
                                "Engineering student",
                            ],
                            cursor: "|",
                        }}
                    />
                </Typography>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                        Determined, serious, autonomous and curious. I am
                        passionate about web development and website creation.
                        In order to make web development a skill, I keep my
                        knowledge up to date by taking online courses and
                        practicing...
                    </Typography>
                </motion.div>
                <Stack
                    sx={{
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ width: "65%", padding: "10px" }}
                        href="#projets"
                        component="a"
                        onClick={() => {
                            window.scrollTo({
                                top: document.getElementById("projets")
                                    .offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    >
                        View my projects
                    </Button>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ justifyContent: "center" }}
                    >
                        <FacebookIcon
                            onClick={() =>
                                window.open(
                                    "https://www.facebook.com/share/1Yj7qNMj4b/?mibextid=wwXIfr",
                                    "_blank"
                                )
                            }
                            sx={{
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    color: "#4267B2",
                                },
                            }}
                        />
                        <InstagramIcon
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/kimfuta_lusamote/",
                                    "_blank"
                                )
                            }
                            sx={{
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    color: "#E1306C",
                                },
                            }}
                        />
                        <GitHubIcon
                            onClick={() =>
                                window.open(
                                    "https://github.com/Claude20022002",
                                    "_blank"
                                )
                            }
                            sx={{
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    color: "#333",
                                },
                            }}
                        />
                        <LinkedInIcon
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/lusamote-kimfuta-b20000250/",
                                    "_blank"
                                )
                            }
                            sx={{
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    color: "#0077B5",
                                },
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>

            {/* Image de la section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    onClick={toggleMode}
                    src="/images/avatar.png"
                    alt="Claude"
                    style={{
                        width: "100%",
                        maxWidth: "300px", // Taille maximale de l'image
                        cursor: "pointer",
                    }}
                />
            </motion.div>
        </Stack>
    );
}
