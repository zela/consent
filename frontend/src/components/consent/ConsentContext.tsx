import { createContext } from "react";
import type { ConsentObject } from "./useConsent";

export interface ConsentObjectWrapper {
  consent_object: ConsentObject;
}

export interface ConsentContextType {
  consentObjects: ConsentObjectWrapper[];
  setConsentObjects: (objects: ConsentObjectWrapper[]) => void;
}

export const ConsentContext = createContext<ConsentContextType | undefined>(
  undefined
);
