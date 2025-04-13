import { Stack, Typography } from "@mui/material";
import React from "react";
import SplitText from "./SplitText/SplitText"; // Assurez-vous que le chemin est correct
import Typewriter from "./typerwrite/Typewriter";
import { motion } from "framer-motion";

export default function Home() {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <Stack
            component="section"
            direction={{ xs: "column", md: "row" }} // Disposition en ligne pour les écrans md et plus
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
                    width: { xs: "100%", md: "40%" }, // Largeur ajustée pour les écrans
                    textAlign: { xs: "center", md: "left" }, // Centré sur mobile
                    padding: { xs: "0 20px", md: "9px" }, // Ajout de padding sur mobile
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
                        background:
                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: ["Claude", "Junior Web Developer"],
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
                    src="/images/avatar.png"
                    alt="Claude"
                    style={{
                        width: "100%",
                        maxWidth: "300px", // Taille maximale de l'image
                    }}
                />
            </motion.div>
        </Stack>
    );
}
