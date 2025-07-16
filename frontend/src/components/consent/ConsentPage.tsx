import React, { useContext } from "react";
import { AuthContext } from "@/components/auth/AuthContext";
import { Button } from "@/components/ui/button";

const ConsentPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { logout } = authContext;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-4 left-4">
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default ConsentPage;
