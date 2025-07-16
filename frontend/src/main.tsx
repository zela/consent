import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "@/components/auth/AuthContext.tsx";
import { ConsentProvider } from "@/components/consent/ConsentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ConsentProvider>
        <App />
      </ConsentProvider>
    </AuthProvider>
  </StrictMode>
);
