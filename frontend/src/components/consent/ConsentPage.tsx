import React, { useContext } from "react";
import { AuthContext } from "@/components/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { ConsentForm } from "@/components/consent/ConsentForm";

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
      <ConsentForm />
    </div>
  );
};

export default ConsentPage;
