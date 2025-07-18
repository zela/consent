import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { authenticate } from "./authenticate";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { login } = authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { token } = await authenticate({ username, password });
      login(token);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : (err as string));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    password,
    error,
    isLoading,
    setUsername,
    setPassword,
    handleSubmit,
  };
};
