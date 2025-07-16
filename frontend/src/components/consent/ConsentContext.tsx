import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ConsentContextType {
  consentObjects: any[];
  setConsentObjects: (objects: any[]) => void;
}

export const ConsentContext = createContext<ConsentContextType | undefined>(
  undefined
);

interface ConsentProviderProps {
  children: ReactNode;
}

export const ConsentProvider: React.FC<ConsentProviderProps> = ({
  children,
}) => {
  const [consentObjects, setConsentObjects] = useState<any[]>([]);

  return (
    <ConsentContext.Provider value={{ consentObjects, setConsentObjects }}>
      {children}
    </ConsentContext.Provider>
  );
};
