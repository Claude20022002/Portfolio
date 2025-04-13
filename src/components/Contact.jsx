import {
    Container,
    Stack,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
    CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            );

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: "Message envoyé avec succès !" },
            });

            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null },
                });
            }, 3000);
        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                info: {
                    error: true,
                    msg: "Une erreur est survenue. Veuillez réessayer.",
                },
            });
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const socialVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }} id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 8 }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* FORMULAIRE */}
                    <Stack
                        spacing={4}
                        sx={{
                            width: { xs: "100%", md: "60%" },
                            alignItems: "center",
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            padding: { xs: "20px", sm: "40px" },
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(33, 150, 243, 0.1)",
                            transition: "all 0.4s ease-in-out",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow:
                                    "0 12px 40px rgba(33, 150, 243, 0.2)",
                            },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "bold",
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    mb: 2,
                                    textAlign: "center",
                                }}
                            >
                                Contact Me
                            </Typography>
                        </motion.div>

                        <motion.form
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            onSubmit={handleSubmit}
                            style={{ width: "100%" }}
                        >
                            <Stack spacing={3}>
                                {["name", "email", "message"].map(
                                    (field, i) => (
                                        <motion.div
                                            key={field}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <TextField
                                                label={
                                                    field
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                    field.slice(1)
                                                }
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                                fullWidth
                                                type={
                                                    field === "email"
                                                        ? "email"
                                                        : "text"
                                                }
                                                multiline={field === "message"}
                                                rows={
                                                    field === "message"
                                                        ? 6
                                                        : undefined
                                                }
                                                disabled={status.submitting}
                                                sx={{
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            borderRadius:
                                                                "12px",
                                                            "&:hover fieldset":
                                                                {
                                                                    borderColor:
                                                                        "#2196F3",
                                                                    borderWidth:
                                                                        "2px",
                                                                },
                                                            "&.Mui-focused fieldset":
                                                                {
                                                                    borderColor:
                                                                        "#2196F3",
                                                                    borderWidth:
                                                                        "2px",
                                                                },
                                                        },
                                                }}
                                            />
                                        </motion.div>
                                    )
                                )}

                                {status.info.msg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <Alert
                                            severity={
                                                status.info.error
                                                    ? "error"
                                                    : "success"
                                            }
                                            sx={{ borderRadius: "12px" }}
                                        >
                                            {status.info.msg}
                                        </Alert>
                                    </motion.div>
                                )}

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        disabled={status.submitting}
                                        endIcon={
                                            status.submitting ? (
                                                <CircularProgress size={24} />
                                            ) : (
                                                <SendIcon />
                                            )
                                        }
                                        sx={{
                                            background:
                                                "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                            borderRadius: "12px",
                                            height: 56,
                                            textTransform: "none",
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            boxShadow:
                                                "0 3px 15px rgba(33, 150, 243, 0.3)",
                                            "&:hover": {
                                                boxShadow:
                                                    "0 6px 20px rgba(33, 150, 243, 0.4)",
                                            },
                                        }}
                                    >
                                        {status.submitting
                                            ? "Sending..."
                                            : "Send Message"}
                                    </Button>
                                </motion.div>
                            </Stack>
                        </motion.form>

                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{
                                mt: 4,
                                pt: 4,
                                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            {[
                                FacebookIcon,
                                InstagramIcon,
                                GitHubIcon,
                                LinkedInIcon,
                            ].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={socialVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <Icon
                                        sx={{
                                            cursor: "pointer",
                                            fontSize: "32px",
                                            color: "#666",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "#2196F3",
                                            },
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </Stack>
                    </Stack>

                    {/* ILLUSTRATION */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            display: { xs: "none", sm: "block" },
                            position: "relative",
                            height: "600px",
                            perspective: "1000px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/assets/svg/undraw_dev-productivity_5wps.svg"
                            alt="developer productivity"
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                zIndex: 2,
                                animation: "float3D 6s ease-in-out infinite",
                                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                                "@keyframes float3D": {
                                    "0%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                    "50%": {
                                        transform:
                                            "translateY(-20px) rotateY(5deg) rotateX(-5deg)",
                                    },
                                    "100%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                },
                            }}
                        />
                        <Box
                            component={motion.img}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            src="/assets/svg/undraw_pair-programming_9jyg.svg"
                            alt="pair programming"
                            sx={{
                                width: "80%",
                                maxWidth: "320px",
                                position: "absolute",
                                top: "45%",
                                right: "10%",
                                zIndex: 1,
                                animation:
                                    "float3DReverse 7s ease-in-out infinite",
                                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                                "@keyframes float3DReverse": {
                                    "0%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                    "50%": {
                                        transform:
                                            "translateY(20px) rotateY(-5deg) rotateX(5deg)",
                                    },
                                    "100%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                },
                            }}
                        />
                    </Box>
                </Stack>
            </motion.div>
        </Container>
    );
}
