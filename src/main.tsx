import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import GlobalStyles from "./globalStyles.ts";
import Router from "./routes/routes.tsx";

// Contexts
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import { ModalProvider } from "./contexts/ModalProvider.tsx";
import { ApiProvider } from "./contexts/ApiProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* Inico - Definindo provider de forma global */}
        <AuthProvider>
            <ApiProvider>
                <ModalProvider>
                    {/* inicio - Definindo rotas de forma global */}
                    <BrowserRouter>
                        <GlobalStyles />
                        <Router />
                    </BrowserRouter>
                    {/* Final - Definindo rotas de forma global */}
                </ModalProvider>
            </ApiProvider>
        </AuthProvider>
        {/* Final - Definindo provider de forma global */}
    </StrictMode>
);
