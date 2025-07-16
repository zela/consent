import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext || authContext.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return authContext.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
