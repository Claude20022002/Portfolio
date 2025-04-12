import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeContext>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    // Options par défaut
                    duration: 5000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                    // Options spécifiques aux types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: "green",
                            secondary: "black",
                        },
                    },
                }}
            />
            <App />
        </ThemeContext>
    </StrictMode>
);
