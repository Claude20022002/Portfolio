import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: {
                    value: "#2f2624",
                },
                secondary: {
                    value: "#d1d5d2",
                },
            },
            fontSizes: {
                sm: {
                    value: "0.875rem",
                },
                md: {
                    value: "1rem",
                },
                lg: {
                    value: "1.125rem",
                },
            },
            fontWeights: {
                normal: {
                    value: "400",
                },
                medium: {
                    value: "500",
                },
                bold: {
                    value: "700",
                },
            },
        },
    },
});

const system = createSystem(defaultConfig, config);

export default function App() {
    return (
        <ChakraProvider value={system}>
            <Box color="primary" fontWeight="medium" fontSize="md">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
                <Box as="footer" padding="4" backgroundColor="secondary">
                    <Footer />
                </Box>
            </Box>
        </ChakraProvider>
    );
}
