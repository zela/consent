import { useState } from "react";
import type { ReactNode } from "react";
import { ConsentContext } from "./ConsentContext";
import type { ConsentObjectWrapper } from "./ConsentContext";

interface ConsentProviderProps {
  children: ReactNode;
}

export const ConsentProvider = ({ children }: ConsentProviderProps) => {
  const [consentObjects, setConsentObjects] = useState<ConsentObjectWrapper[]>([]);

  return (
    <ConsentContext.Provider value={{ consentObjects, setConsentObjects }}>
      {children}
    </ConsentContext.Provider>
  );
};
