import { motion } from "framer-motion";
import { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Modal,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import { projet } from "../module/Module";

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }} id="projets">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 4,
                        fontWeight: 700,
                        background:
                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    My Projects
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Discover my web development achievements
                </Typography>
            </motion.div>

            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                justifyContent={"center"}
            >
                {projet.map((project, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={index}
                            variants={cardVariants}
                        >
                            <Box
                                sx={{
                                    maxWidth: "300px",
                                    position: "relative",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                    height: { xs: 280, sm: 320, md: 380 },
                                    backgroundColor: "#fff",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow:
                                            "0 12px 40px rgba(0,0,0,0.2)",
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                {/* Affiche uniquement la première image */}
                                <Box
                                    component="img"
                                    src={project.ImagePreview[0].image}
                                    alt={project.title}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                        p: 2,
                                        color: "white",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            textShadow:
                                                "2px 2px 4px rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 0.5,
                                            mb: 1,
                                        }}
                                    >
                                        {project.tools.map((tool, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="caption"
                                                sx={{
                                                    bgcolor:
                                                        "rgba(255,255,255,0.9)",
                                                    color: "#000",
                                                    px: 1,
                                                    py: 0.5,
                                                    borderRadius: "8px",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tool}
                                            </Typography>
                                        ))}
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <motion.a
                                            href={project.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                                padding: "4px 12px",
                                                borderRadius: "8px",
                                                background:
                                                    "rgba(255,255,255,0.1)",
                                                backdropFilter: "blur(4px)",
                                            }}
                                        >
                                            GitHub
                                        </motion.a>
                                        <motion.div whileHover={{ scale: 1.1 }}>
                                            <IconButton
                                                onClick={() =>
                                                    handleOpen(project)
                                                }
                                                sx={{
                                                    color: "white",
                                                    bgcolor:
                                                        "rgba(255,255,255,0.1)",
                                                    backdropFilter: "blur(4px)",
                                                    "&:hover": {
                                                        bgcolor:
                                                            "rgba(255,255,255,0.2)",
                                                    },
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </motion.div>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        p: 3,
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        overflow: "auto",
                    }}
                >
                    {selectedProject && (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 2,
                                }}
                            >
                                <Typography variant="h5">
                                    {selectedProject.title}
                                </Typography>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Grid container spacing={2}>
                                {selectedProject.ImagePreview.map(
                                    (preview, idx) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={idx}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    delay: idx * 0.1,
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={preview.image}
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: 1,
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </motion.div>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
}
