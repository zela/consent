import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
