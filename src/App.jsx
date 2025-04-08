import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    createSystem,
    defaultConfig,
    defineConfig,
    ChakraProvider,
} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: { value: "#f5efef" },
                secondary: { value: "#1c1a1a" },
            },
            fonts: {
                body: { value: "Roboto, sans-serif" },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);

export default function App() {
    return (
        <ChakraProvider value={system}>
            <Box color="primary">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
                <Footer backgroundColor="gray.100" />
            </Box>
        </ChakraProvider>
    );
}
