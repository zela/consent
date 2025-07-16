import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    setIsAuthenticated(true);
    sessionStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
