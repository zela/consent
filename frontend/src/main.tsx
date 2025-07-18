import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "@/components/auth/AuthProvider.tsx";
import { ConsentProvider } from "@/components/consent/ConsentProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ConsentProvider>
        <App />
      </ConsentProvider>
    </AuthProvider>
  </StrictMode>
);
