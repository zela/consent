import { useState, useCallback, useContext } from "react";
import { ConsentContext } from "./ConsentContext";
import { AuthContext } from "@/components/auth/AuthContext";

export interface ConsentObject {
  id: string;
  title: string;
  description: string;
  type: "INPUT" | "SELECT";
  required: boolean;
  options: Array<{ id: string; title: string }>;
}

export const useConsent = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const consentContext = useContext(ConsentContext);
  const authContext = useContext(AuthContext);

  if (!consentContext || !authContext) {
    throw new Error(
      "useConsent must be used within a ConsentProvider and AuthProvider",
    );
  }

  const { consentObjects, setConsentObjects } = consentContext;
  const { token } = authContext;

  const fetchConsents = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!token) {
        throw new Error("No auth token found");
      }
      const response = await fetch("/api/consent_objects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch consent objects");
      }

      const data = await response.json();
      setConsentObjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : (err as string));
    } finally {
      setIsLoading(false);
    }
  }, [token, setConsentObjects]);

  return { consentObjects, isLoading, error, fetchConsents };
};
